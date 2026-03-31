import { useEffect, useRef, useState } from "react";
import { Headphones, Target, Cog, BarChart3, Sparkles, Database, Plug, Rocket, Search, ArrowRight } from "lucide-react";
import aiEcosystemImg from "@/assets/ai-agents-ecosystem.jpg";

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Understand Requirements",
    desc: "We analyze your business processes, pain points, and goals to identify where AI agents deliver the highest impact.",
  },
  {
    step: "02",
    icon: Cog,
    title: "Design Workflows",
    desc: "Map out conversation flows, decision trees, and automation logic tailored to your specific use cases.",
  },
  {
    step: "03",
    icon: Database,
    title: "Train with Your Data",
    desc: "Feed your knowledge base, FAQs, and business rules into the AI to ensure accurate, context-aware responses.",
  },
  {
    step: "04",
    icon: Plug,
    title: "Integrate Systems",
    desc: "Connect seamlessly with your CRM, APIs, communication channels, and existing tech stack.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Deploy & Optimize",
    desc: "Launch your agents into production with real-time monitoring, analytics, and continuous improvement loops.",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const AIAgentsIntro = () => {
  const intro = useScrollReveal();
  const process = useScrollReveal();
  const visual = useScrollReveal();

  return (
    <>
      {/* Intro */}
      <section className="py-24 bg-background">
        <div
          ref={intro.ref}
          className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${intro.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
              Why AI Agents
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
              AI Agents Built for <span className="text-gradient">Your Business</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Our intelligent AI agents go beyond simple chatbots. They automate customer support, handle lead qualification,
              orchestrate complex workflows, and deliver real-time analytics — all working together as a unified digital workforce
              that scales with your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Headphones, label: "Customer Support", desc: "24/7 intelligent assistance" },
              { icon: Target, label: "Lead Handling", desc: "Qualify & route prospects" },
              { icon: Cog, label: "Workflow Automation", desc: "End-to-end process orchestration" },
              { icon: BarChart3, label: "Smart Analytics", desc: "Real-time business insights" },
            ].map((item) => (
              <div
                key={item.label}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-glow transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-1">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="py-24 bg-muted/30">
        <div
          ref={process.ref}
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 delay-100 ${process.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              How We Build <span className="text-gradient">AI Agents</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A proven five-step methodology to deliver AI agents that are accurate, reliable, and production-ready.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((s, i) => (
              <div
                key={s.step}
                className="relative group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-glow transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-4xl font-display font-black text-primary/10 absolute top-3 right-4">
                  {s.step}
                </span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground text-sm mb-2">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="py-24 bg-gradient-to-b from-foreground/[0.03] to-background">
        <div
          ref={visual.ref}
          className={`container mx-auto px-4 max-w-5xl transition-all duration-700 delay-200 ${visual.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
              Ecosystem
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              The <span className="text-gradient">Agent Network</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              12 specialized AI agents working together as a unified digital workforce.
            </p>
          </div>
          <div className="group relative rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <img
              src={aiEcosystemImg}
              alt="AI-powered ecosystem showing all 12 intelligent agents — ARIA, REVA, NOVA, LUMI, ORION, SAGE, VEGA, CALYX, ATLAS, NEXUS, ECHO, and DOCU — connected in a unified network"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            Our AI-powered ecosystem of intelligent agents working together
          </p>
        </div>
      </section>
    </>
  );
};

export default AIAgentsIntro;
