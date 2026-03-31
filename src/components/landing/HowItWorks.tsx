import { PenTool, Database, Rocket, LineChart } from "lucide-react";

const steps = [
  { icon: PenTool, num: "01", title: "Design", desc: "Design your assistant's behavior in a visual flow editor.", color: "from-primary/20 to-primary/5" },
  { icon: Database, num: "02", title: "Connect", desc: "Connect your data sources—CRM, FAQs, docs, and more.", color: "from-accent/20 to-accent/5" },
  { icon: Rocket, num: "03", title: "Deploy", desc: "Deploy across channels: web, voice, WhatsApp, and beyond.", color: "from-primary/15 to-accent/15" },
  { icon: LineChart, num: "04", title: "Optimize", desc: "Monitor performance and optimize with real‑time analytics.", color: "from-accent/15 to-primary/10" },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-28 bg-background relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <span className="block text-center text-sm font-semibold text-accent uppercase tracking-widest mb-4 opacity-0 animate-fade-in-up">Process</span>
      <h2 className="text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        How to build your <span className="text-gradient">dynamic assistant</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-20 text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Four simple steps from idea to production-ready AI agent.
      </p>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30" />

        {steps.map((s, i) => (
          <div
            key={s.num}
            className="flex flex-col items-center text-center relative opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.15 + i * 0.12}s` }}
          >
            <div className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${s.color} border border-border flex items-center justify-center mb-6 relative z-10 group hover:shadow-glow hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105`}>
              <s.icon className="h-10 w-10 text-primary" />
            </div>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-xs font-bold mb-3">{s.num}</span>
            <h3 className="font-display font-bold text-foreground text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
