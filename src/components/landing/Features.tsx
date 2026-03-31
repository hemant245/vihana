import { Mic, MessageCircle, Workflow, Layers, Brain, Plug } from "lucide-react";

const features = [
  { icon: Mic, title: "Voice AI", desc: "Human-like voice agents that handle complex multi-turn conversations with natural intonation and empathy." },
  { icon: MessageCircle, title: "Chat Agents", desc: "Smart chat agents for websites, apps, and messaging platforms that resolve queries in real time." },
  { icon: Workflow, title: "Workflow Automation", desc: "Automate repetitive processes end-to-end — from data lookup to action execution — without human intervention." },
  { icon: Layers, title: "Multi-Channel Support", desc: "Deploy a single agent across voice, chat, SMS, WhatsApp, and email with unified context." },
  { icon: Brain, title: "Knowledge Grounding", desc: "Agents pull answers from your latest docs and data sources so responses stay accurate and on-brand." },
  { icon: Plug, title: "Seamless Integrations", desc: "Connect to CRMs, helpdesks, calendars, and payment systems with pre-built connectors." },
];

const Features = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block opacity-0 animate-fade-in-up">
          Features
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Everything you need to <span className="text-gradient">automate intelligently</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          A complete platform built to support every customer interaction with ease.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feat, i) => (
          <div
            key={feat.title}
            className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.2 + i * 0.07}s` }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <feat.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg mb-2">{feat.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
