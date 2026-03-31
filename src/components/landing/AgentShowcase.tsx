import { CalendarCheck, Headphones, Target, Wrench, MessageSquareText, ShieldCheck, Phone, Bot, ArrowRight, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";

const agents = [
  {
    trigger: "When a customer calls",
    triggerIcon: Phone,
    title: "Book Appointment",
    desc: "Checks real-time availability, confirms the slot, and sends calendar invites — all without human intervention.",
    color: "bg-[hsl(252,56%,96%)]",
    borderColor: "border-[hsl(252,56%,85%)]",
    steps: ["Greet caller", "Check availability", "Confirm booking"],
    icons: [CalendarCheck, Phone, Bot],
  },
  {
    trigger: "Message received on chat",
    triggerIcon: MessageCircle,
    title: "Resolve Support Ticket",
    desc: "Pulls context from your knowledge base and resolves common issues instantly with empathetic, accurate responses.",
    color: "bg-[hsl(35,60%,95%)]",
    borderColor: "border-[hsl(35,60%,85%)]",
    steps: ["Identify intent", "Search knowledge base", "Resolve issue"],
    icons: [Headphones, Wrench, Bot],
  },
  {
    trigger: "New lead submitted",
    triggerIcon: Target,
    title: "Qualify & Route Lead",
    desc: "Scores inbound leads using intelligent branching, then routes high-intent prospects directly to your sales team.",
    color: "bg-[hsl(210,60%,95%)]",
    borderColor: "border-[hsl(210,60%,85%)]",
    steps: ["Capture details", "Score lead", "Route to sales"],
    icons: [Target, ShieldCheck, ArrowRight],
  },
  {
    trigger: "Survey triggered after purchase",
    triggerIcon: MessageSquareText,
    title: "Collect Feedback",
    desc: "Engages customers with conversational surveys at the right moment to gather actionable NPS and CSAT insights.",
    color: "bg-[hsl(150,40%,95%)]",
    borderColor: "border-[hsl(150,40%,85%)]",
    steps: ["Trigger survey", "Ask questions", "Analyze sentiment"],
    icons: [MessageSquareText, Bot, ShieldCheck],
  },
  {
    trigger: "Payment overdue alert",
    triggerIcon: ShieldCheck,
    title: "Recover Payment",
    desc: "Sends compliant, empathetic reminders via voice or text — improving recovery rates while preserving relationships.",
    color: "bg-[hsl(280,40%,95%)]",
    borderColor: "border-[hsl(280,40%,85%)]",
    steps: ["Detect overdue", "Send reminder", "Confirm payment"],
    icons: [ShieldCheck, Phone, CalendarCheck],
  },
  {
    trigger: "Technical issue reported",
    triggerIcon: Wrench,
    title: "Troubleshoot & Escalate",
    desc: "Walks users through diagnostic steps using your docs and only escalates complex cases to human agents.",
    color: "bg-[hsl(20,50%,95%)]",
    borderColor: "border-[hsl(20,50%,85%)]",
    steps: ["Diagnose issue", "Try fix", "Escalate if needed"],
    icons: [Wrench, Headphones, ArrowRight],
  },
  {
    trigger: "Candidate applies online",
    triggerIcon: Target,
    title: "Screen & Schedule",
    desc: "Pre-screens candidates with qualifying questions and automatically books interview slots with your hiring team.",
    color: "bg-[hsl(190,50%,95%)]",
    borderColor: "border-[hsl(190,50%,85%)]",
    steps: ["Screen resume", "Ask questions", "Book interview"],
    icons: [Target, MessageSquareText, CalendarCheck],
  },
];

const AgentCard = ({ agent }: { agent: typeof agents[0] }) => (
  <div className={`flex-shrink-0 w-[320px] md:w-[360px] rounded-2xl ${agent.color} border ${agent.borderColor} p-6 select-none`}>
    {/* Trigger label */}
    <div className="flex items-center gap-2 mb-4">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-xs font-medium text-muted-foreground">{agent.trigger}</span>
    </div>

    {/* Flow steps */}
    <div className="flex items-center gap-1.5 mb-5">
      {agent.steps.map((step, i) => (
        <div key={step} className="flex items-center gap-1.5">
          <div className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground shadow-sm">
            {step}
          </div>
          {i < agent.steps.length - 1 && (
            <ArrowRight className="h-3 w-3 text-muted-foreground/60 flex-shrink-0" />
          )}
        </div>
      ))}
    </div>

    {/* Main action */}
    <div className="bg-card rounded-xl border border-border p-4 mb-4 shadow-sm">
      <h3 className="font-display font-bold text-foreground text-base mb-1.5">{agent.title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{agent.desc}</p>
    </div>

    {/* Bottom icons */}
    <div className="flex items-center gap-2">
      {agent.icons.map((Icon, i) => (
        <div key={i} className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      ))}
    </div>
  </div>
);

const AgentShowcase = () => {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="solutions" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
            AI Agents in Action
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            See how agents <span className="text-gradient">automate workflows</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each card represents a production-ready agent — from trigger to resolution, fully autonomous.
          </p>
        </div>
      </div>

      {/* Scrolling track */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-6 px-6"
          style={{
            animation: `agent-scroll 40s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...agents, ...agents].map((agent, i) => (
            <AgentCard key={`${agent.title}-${i}`} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentShowcase;
