import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles } from "lucide-react";
import aiAvatar from "@/assets/ai-avatar.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const initialMessages: Message[] = [
  { id: 1, text: "👋 Hi! I'm your AI Assistant. How can I help you today?", sender: "bot" },
];

const allSuggestions = [
  "What features do you offer?",
  "Tell me about AI agents",
  "What is your pricing?",
  "Can I book a demo?",
  "Do you support WhatsApp or voice?",
  "Can it integrate with CRM?",
  "Do you provide global support?",
  "Is there a free plan?",
  "How can I get started?",
  "What if I need help?",
];

const knowledgeBase: { keywords: string[]; answer: string }[] = [
  { keywords: ["what is", "platform", "about", "who are you"], answer: "This platform helps businesses automate customer interactions using AI agents for support, sales, and operations." },
  { keywords: ["what do", "assistant do", "what does"], answer: "Our AI assistant handles queries, automates workflows, manages leads, and provides real-time responses across channels." },
  { keywords: ["features", "offer", "capabilities"], answer: "We offer AI agents, workflow automation, multi-channel communication, analytics, and CRM integrations." },
  { keywords: ["ai agent", "agents", "bots", "intelligent", "tell me about ai"], answer: "AI agents are intelligent bots that perform tasks like answering queries, booking appointments, handling support, and more — all autonomously." },
  { keywords: ["customer support", "support queries", "24/7"], answer: "Yes! Our AI agents provide 24/7 customer support and can escalate complex issues to human agents when needed." },
  { keywords: ["channel", "platform support", "whatsapp", "voice", "chat"], answer: "We support chat, voice, WhatsApp, and other communication channels so you can reach customers wherever they are." },
  { keywords: ["crm", "integrate", "integration", "api"], answer: "Absolutely. We integrate with popular CRMs and tools via APIs and pre-built connectors." },
  { keywords: ["global", "region", "country", "coverage"], answer: "Yes, our platform supports multiple regions globally with localized capabilities." },
  { keywords: ["pricing", "cost", "price", "plan"], answer: "We offer flexible plans: Start for Free, Pay-as-you-go, and Enterprise. Contact our sales team for detailed pricing tailored to your needs." },
  { keywords: ["free", "free plan", "trial"], answer: "Yes! We have a free tier with limited features so you can get started right away." },
  { keywords: ["demo", "book demo", "schedule"], answer: "Of course! You can book a demo with our team. Just reach out via the Contact Sales button and we'll set it up." },
  { keywords: ["start", "get started", "sign up", "begin"], answer: "You can start for free right away or request a personalized demo to see the platform in action." },
  { keywords: ["help", "support", "contact", "assist", "need help"], answer: "Our support team is available anytime to help you. Feel free to reach out through the platform or contact sales." },
  { keywords: ["hello", "hi", "hey", "greet"], answer: "Hello! 👋 How can I help you today? You can ask me about features, pricing, AI agents, or request a demo." },
];

const fallback = "I'm not sure I understood that. You can ask about features, pricing, AI agents, or request a demo.";

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  let bestMatch: { score: number; answer: string } = { score: 0, answer: fallback };
  for (const entry of knowledgeBase) {
    const score = entry.keywords.filter((kw) => lower.includes(kw)).length;
    if (score > bestMatch.score) bestMatch = { score, answer: entry.answer };
  }
  return bestMatch.answer;
}

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const currentSuggestions = allSuggestions.slice(suggestionIndex, suggestionIndex + 4).length >= 4
    ? allSuggestions.slice(suggestionIndex, suggestionIndex + 4)
    : [...allSuggestions.slice(suggestionIndex), ...allSuggestions.slice(0, 4 - (allSuggestions.length - suggestionIndex))];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), text: text.trim(), sender: "user" };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, text: findAnswer(text), sender: "bot" },
      ]);
      setSuggestionIndex((prev) => (prev + 4) % allSuggestions.length);
    }, 900);
  };

  return (
    <>
      {/* Chat popup */}
      <div
        className={`fixed bottom-20 right-4 z-50 w-[340px] sm:w-[380px] rounded-2xl border border-border bg-background shadow-2xl transition-all duration-300 origin-bottom-right ${
          open ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-2xl bg-primary px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-primary-foreground/20">
              <img src={aiAvatar} alt="AI Assistant" className="h-8 w-8 object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold text-primary-foreground leading-tight">AI Assistant</span>
              <span className="flex items-center gap-1 text-[10px] text-primary-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70 animate-pulse" />
                Online
              </span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-72 overflow-y-auto p-3 space-y-3">
          {messages.map((m) => (
            <div key={m.id} className={`flex items-end gap-2 ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
              {m.sender === "bot" && (
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-3 w-3 text-primary" />
                </div>
              )}
              <div
                className={`max-w-[78%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  m.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-muted text-foreground rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-end gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-3 w-3 text-primary" />
              </div>
              <div className="rounded-xl rounded-bl-sm bg-muted px-4 py-2.5">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          {/* Suggestions */}
          {!isTyping && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {currentSuggestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-primary hover:bg-primary/15 hover:border-primary/40 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
          className="flex items-center gap-2 border-t border-border px-3 py-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            className="flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0 text-sm"
          />
          <Button type="submit" size="icon" className="h-8 w-8 shrink-0 rounded-full">
            <Send className="h-3.5 w-3.5" />
          </Button>
        </form>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30 transition-transform duration-200 hover:scale-110 overflow-hidden"
      >
        {open ? <X className="h-6 w-6 text-primary-foreground" /> : <img src={aiAvatar} alt="Chat" className="h-12 w-12 object-cover" />}
      </button>
    </>
  );
};

export default FloatingChat;
