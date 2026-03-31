import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  saveAssistant,
  updateAssistant,
  getAssistant,
  getAllCategories,
  addCustomCategory,
  LANGUAGES,
  type Assistant,
} from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Plus, Save } from "lucide-react";
import { toast } from "sonner";

const TONES = ["friendly", "professional", "casual"] as const;

const AssistantForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [categories, setCategories] = useState<string[]>(getAllCategories());
  const [newCategory, setNewCategory] = useState("");
  const [showNewCategory, setShowNewCategory] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    greetingMessage: "",
    language: "English",
    tone: "friendly" as "friendly" | "professional" | "casual",
    systemPrompt: "",
    knowledgeBaseUrl: "",
    fallbackMessage: "",
    maxResponseLength: 500,
    escalationEmail: "",
  });

  useEffect(() => {
    if (isEdit) {
      const a = getAssistant(id!);
      if (a) {
        setForm({
          name: a.name,
          category: a.category,
          greetingMessage: a.greetingMessage,
          language: a.language,
          tone: a.tone,
          systemPrompt: a.systemPrompt,
          knowledgeBaseUrl: a.knowledgeBaseUrl,
          fallbackMessage: a.fallbackMessage,
          maxResponseLength: a.maxResponseLength,
          escalationEmail: a.escalationEmail,
        });
      }
    }
  }, [id, isEdit]);

  const handleChange = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      addCustomCategory(newCategory.trim());
      setCategories(getAllCategories());
      setForm((prev) => ({ ...prev, category: newCategory.trim() }));
      setNewCategory("");
      setShowNewCategory(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Agent name is required");
      return;
    }
    if (!form.category) {
      toast.error("Please select a category");
      return;
    }

    if (isEdit) {
      updateAssistant(id!, form);
      toast.success("Assistant updated!");
    } else {
      saveAssistant(form);
      toast.success("Assistant created!");
    }
    navigate("/dashboard");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button onClick={() => navigate("/dashboard")} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to assistants
      </button>

      <h2 className="font-display text-2xl font-bold text-foreground mb-1">
        {isEdit ? "Edit Assistant" : "Create New Assistant"}
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        {isEdit ? "Update your voice agent configuration." : "Configure your dynamic voice agent with the fields below."}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Agent Name *</Label>
          <Input id="name" placeholder="e.g. Health Advisor Bot" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label>Category *</Label>
          <div className="flex gap-2">
            <Select value={form.category} onValueChange={(v) => handleChange("category", v)}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button type="button" variant="outline" size="icon" onClick={() => setShowNewCategory(!showNewCategory)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          {showNewCategory && (
            <div className="flex gap-2 mt-2">
              <Input placeholder="New category name" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
              <Button type="button" variant="secondary" onClick={handleAddCategory}>Add</Button>
            </div>
          )}
        </div>

        {/* Greeting Message */}
        <div className="space-y-2">
          <Label htmlFor="greeting">Greeting Message</Label>
          <Textarea id="greeting" placeholder="Hello! How can I help you today?" value={form.greetingMessage} onChange={(e) => handleChange("greetingMessage", e.target.value)} rows={2} />
        </div>

        {/* Language & Tone row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Language</Label>
            <Select value={form.language} onValueChange={(v) => handleChange("language", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {LANGUAGES.map((l) => (
                  <SelectItem key={l} value={l}>{l}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Tone</Label>
            <Select value={form.tone} onValueChange={(v) => handleChange("tone", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {TONES.map((t) => (
                  <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* System Prompt */}
        <div className="space-y-2">
          <Label htmlFor="prompt">System Prompt</Label>
          <Textarea id="prompt" placeholder="You are a helpful healthcare assistant..." value={form.systemPrompt} onChange={(e) => handleChange("systemPrompt", e.target.value)} rows={4} />
          <p className="text-xs text-muted-foreground">Define the AI's personality and behavior instructions.</p>
        </div>

        {/* Knowledge Base URL */}
        <div className="space-y-2">
          <Label htmlFor="kb">Knowledge Base URL</Label>
          <Input id="kb" type="url" placeholder="https://docs.example.com" value={form.knowledgeBaseUrl} onChange={(e) => handleChange("knowledgeBaseUrl", e.target.value)} />
        </div>

        {/* Fallback Message */}
        <div className="space-y-2">
          <Label htmlFor="fallback">Fallback Message</Label>
          <Textarea id="fallback" placeholder="I'm sorry, I couldn't understand that. Let me connect you with a human agent." value={form.fallbackMessage} onChange={(e) => handleChange("fallbackMessage", e.target.value)} rows={2} />
        </div>

        {/* Max Response Length & Escalation Email */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="maxLen">Max Response Length</Label>
            <Input id="maxLen" type="number" min={50} max={5000} value={form.maxResponseLength} onChange={(e) => handleChange("maxResponseLength", parseInt(e.target.value) || 500)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Escalation Email</Label>
            <Input id="email" type="email" placeholder="support@company.com" value={form.escalationEmail} onChange={(e) => handleChange("escalationEmail", e.target.value)} />
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-3 pt-4 border-t border-border">
          <Button type="submit" variant="hero" className="px-8">
            <Save className="mr-1 h-4 w-4" />
            {isEdit ? "Update Assistant" : "Create Assistant"}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate("/dashboard")}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AssistantForm;
