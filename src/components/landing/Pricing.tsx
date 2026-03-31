import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    desc: "For individuals exploring AI assistants.",
    features: ["1 assistant", "500 conversations/mo", "Web channel", "Community support"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    desc: "For teams ready to scale their AI operations.",
    features: ["Unlimited assistants", "10,000 conversations/mo", "All channels", "Priority support", "Analytics dashboard", "Custom integrations"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations with advanced needs.",
    features: ["Everything in Pro", "Unlimited conversations", "SSO & SAML", "Dedicated CSM", "SLA guarantee", "On‑prem option"],
    featured: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24 bg-background relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />
    <div className="container mx-auto px-4 relative z-10">
      <span className="block text-center text-sm font-semibold text-accent uppercase tracking-widest mb-4 opacity-0 animate-fade-in-up">Pricing</span>
      <h2 className="text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Simple, <span className="text-gradient">transparent</span> pricing
      </h2>
      <p className="text-center text-muted-foreground mb-16 text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>Start free, scale as you grow.</p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((t, i) => (
          <div
            key={t.name}
            className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer opacity-0 animate-fade-in-up ${
              t.featured
                ? "bg-card border-primary/40 shadow-glow scale-[1.02]"
                : "bg-card border-border hover:border-primary/20 hover:shadow-glow"
            }`}
            style={{ animationDelay: `${0.15 + i * 0.1}s` }}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                Most popular
              </span>
            )}
            <h3 className="font-display font-bold text-xl text-foreground mb-1">{t.name}</h3>
            <p className="text-sm text-muted-foreground mb-5">{t.desc}</p>
            <div className="mb-6">
              <span className="font-display text-4xl font-bold text-foreground">{t.price}</span>
              <span className="text-muted-foreground text-sm">{t.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant={t.featured ? "hero" : "outline"} className="w-full rounded-full" asChild>
              <Link to="/contact-sales">
                Contact Sales
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
