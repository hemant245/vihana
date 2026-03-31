import { Shield, Sparkles, LayoutTemplate, Server, ArrowRight } from "lucide-react";

const points = [
  { icon: Shield, title: "Enterprise‑grade security", desc: "SOC 2 compliant infrastructure with end‑to‑end encryption and data isolation.", num: "01" },
  { icon: Sparkles, title: "Context‑aware conversations", desc: "Dynamic, intelligent responses powered by advanced AI — not just rule‑based decision trees.", num: "02" },
  { icon: LayoutTemplate, title: "Pre‑built templates", desc: "Get started in minutes with templates for support, sales, onboarding, collections, and more.", num: "03" },
  { icon: Server, title: "Scalable infrastructure", desc: "Handle millions of concurrent interactions with auto‑scaling cloud infrastructure.", num: "04" },
];

const WhyVehana = () => (
  <section className="py-28 bg-hero grid-pattern relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <span className="block text-center text-sm font-semibold text-accent uppercase tracking-widest mb-4 opacity-0 animate-fade-in-up">Why vehana.ai</span>
      <h2 className="text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Why choose <span className="text-gradient">vehana.ai</span>?
      </h2>
      <p className="text-center text-hero-muted max-w-xl mx-auto mb-20 text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Built for teams that demand reliability, intelligence, and speed.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {points.map((p, i) => (
          <div
            key={p.title}
            className="group relative flex gap-6 p-8 rounded-2xl bg-hero-muted/5 border border-hero-muted/15 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up backdrop-blur-sm"
            style={{ animationDelay: `${0.15 + i * 0.1}s` }}
          >
            <div className="absolute top-4 right-5 text-4xl font-display font-bold text-hero-muted/10 select-none">{p.num}</div>
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/25 transition-all duration-300">
              <p.icon className="h-7 w-7 text-accent" />
            </div>
            <div>
              <h3 className="font-display font-bold text-hero-foreground mb-2 text-lg">{p.title}</h3>
              <p className="text-sm text-hero-muted leading-relaxed mb-3">{p.desc}</p>
              <div className="flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyVehana;
