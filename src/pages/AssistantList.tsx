import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAssistants, deleteAssistant, updateAssistant, type Assistant } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Play, Pause, Edit, MessageSquare } from "lucide-react";

const statusColors: Record<string, string> = {
  draft: "bg-muted text-muted-foreground",
  active: "bg-accent/15 text-accent",
  paused: "bg-destructive/15 text-destructive",
};

const AssistantList = () => {
  const [assistants, setAssistants] = useState<Assistant[]>([]);

  const reload = () => setAssistants(getAssistants());
  useEffect(reload, []);

  const handleDelete = (id: string) => {
    if (confirm("Delete this assistant and all its logs?")) {
      deleteAssistant(id);
      reload();
    }
  };

  const toggleStatus = (a: Assistant) => {
    const next = a.status === "active" ? "paused" : "active";
    updateAssistant(a.id, { status: next });
    reload();
  };

  if (assistants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
          <Plus className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-display text-xl font-bold text-foreground mb-2">No assistants yet</h2>
        <p className="text-muted-foreground text-sm mb-6 max-w-sm">
          Create your first AI voice assistant to get started.
        </p>
        <Button variant="hero" asChild>
          <Link to="/dashboard/create">Create Assistant</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">My Assistants</h2>
          <p className="text-sm text-muted-foreground">{assistants.length} assistant{assistants.length !== 1 ? "s" : ""}</p>
        </div>
        <Button variant="hero" asChild>
          <Link to="/dashboard/create">
            <Plus className="mr-1 h-4 w-4" /> New Assistant
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {assistants.map((a) => (
          <div key={a.id} className="p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors group">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-display font-semibold text-foreground">{a.name}</h3>
                <span className="text-xs text-muted-foreground">{a.category}</span>
              </div>
              <Badge className={statusColors[a.status]}>{a.status}</Badge>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{a.greetingMessage || "No greeting set"}</p>

            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
              <span>{a.language}</span> · <span className="capitalize">{a.tone}</span>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-border">
              <Button variant="ghost" size="sm" onClick={() => toggleStatus(a)} title={a.status === "active" ? "Pause" : "Activate"}>
                {a.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to={`/dashboard/edit/${a.id}`}><Edit className="h-4 w-4" /></Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to={`/dashboard/logs?assistant=${a.id}`}><MessageSquare className="h-4 w-4" /></Link>
              </Button>
              <Button variant="ghost" size="sm" className="ml-auto text-destructive hover:text-destructive" onClick={() => handleDelete(a.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssistantList;
