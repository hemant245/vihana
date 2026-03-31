import { Wand2, Globe, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "No-Code Agent Builder",
    desc: "Describe what you want and the AI builds it. Update steps, logic, or messages anytime — just by asking.",
    bullets: ["Natural language creation", "Visual flow editor", "Instant iteration"],
  },
  {
    icon: Globe,
    title: "Works Across Every Channel",
    desc: "Build once, deploy everywhere. Your agents work on voice, chat, SMS, and WhatsApp with consistent context.",
    bullets: ["Omnichannel deployment", "Context preservation", "Unified inbox"],
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Track resolution rates, sentiment scores, and conversion metrics across all channels in real time.",
    bullets: ["Live dashboards", "Sentiment analysis", "Performance insights"],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "SOC 2 compliant infrastructure with end-to-end encryption, role-based access, and audit logging.",
    bullets: ["Data encryption", "RBAC controls", "Compliance ready"],
  },
];

const BuildSmarter = () => (
  <section className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block opacity-0 animate-fade-in-up">
          Platform
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Build smarter, <span className="text-gradient">launch faster</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Deploy high-performing agents without code. Connect to your tools, understand your workflows, and start delivering results on day one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feat, i) => (
          <div
            key={feat.title}
            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.2 + i * 0.08}s` }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <feat.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-xl mb-2">{feat.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{feat.desc}</p>
            <ul className="space-y-2">
              {feat.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BuildSmarter;
