import { PhoneCall, Wallet, Users, Landmark, Headphones, Briefcase, GraduationCap, Building2, ShieldCheck, CalendarCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Wallet,
    title: "Collections Calls",
    desc: "Automate payment reminders and debt recovery conversations with empathetic, compliant AI agents.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: CalendarCheck,
    title: "Booking Calls",
    desc: "Let AI handle appointment scheduling, confirmations, and rescheduling across your business.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Users,
    title: "Recruitment Calls",
    desc: "Screen candidates, schedule interviews, and follow up automatically with intelligent voice agents.",
    color: "from-primary/20 to-accent/10",
  },
  {
    icon: Landmark,
    title: "Loan Collection",
    desc: "Manage loan recovery with personalized, regulation-aware AI conversations at scale.",
    color: "from-accent/15 to-primary/10",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Resolve tickets 24/7 with context-aware agents that understand your product inside out.",
    color: "from-primary/15 to-accent/15",
  },
  {
    icon: Briefcase,
    title: "Sales & Follow-up",
    desc: "Qualify leads, nurture prospects, and close deals with persistent, intelligent outreach.",
    color: "from-accent/20 to-primary/5",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Claims",
    desc: "Guide claimants through the process, collect information, and provide status updates automatically.",
    color: "from-primary/20 to-accent/5",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    desc: "Onboard students, answer enrollment queries, and deliver personalized learning support.",
    color: "from-accent/15 to-primary/15",
  },
];

const Solutions = () => (
  <section id="solutions" className="py-24 bg-background relative overflow-hidden">
    {/* Background decorations */}
    <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4 opacity-0 animate-fade-in-up">Solutions</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Voice Agents for <span className="text-gradient">Every Industry</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          From collections to recruitment, build production-ready AI voice agents tailored to your exact workflow — no code required.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {solutions.map((s, i) => (
          <div
            key={s.title}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.1 + i * 0.06}s` }}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground text-base mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Build this agent <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
        <p className="text-muted-foreground mb-5">And many more — healthcare, real estate, finance, legal, e-commerce…</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/dashboard/create">
            Start Building Your Agent
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default Solutions;
