import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Zap, Globe, BarChart3, Layers, Headphones, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Starter",
    label: "Free to explore",
    desc: "Perfect for exploring AI agents and testing your first workflows.",
    features: [
      "Up to 2 AI agents",
      "Basic voice & chat channels",
      "500 interactions / month",
      "Community support",
      "Standard analytics",
      "Pre-built templates",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact-sales",
    featured: false,
  },
  {
    name: "Growth",
    label: "Pay as you go",
    desc: "Usage-based pricing that scales with your business. Only pay for what you use.",
    features: [
      "Unlimited AI agents",
      "All channels (Voice, Chat, WhatsApp, SMS)",
      "Usage-based billing",
      "API & webhook access",
      "Advanced analytics & reporting",
      "Priority email support",
      "Custom integrations",
      "Team collaboration",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact-sales",
    featured: true,
  },
  {
    name: "Enterprise",
    label: "Talk to Sales",
    desc: "Tailored solutions for organizations with complex requirements and scale.",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom SLA guarantee",
      "SSO & SAML authentication",
      "On-premise deployment option",
      "Advanced security & compliance",
      "Custom AI model training",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact-sales",
    featured: false,
  },
];

const comparisonFeatures = [
  { feature: "AI Agents", starter: "2", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "Monthly Interactions", starter: "500", growth: "Pay per use", enterprise: "Custom volume" },
  { feature: "Voice Channel", starter: true, growth: true, enterprise: true },
  { feature: "Chat Channel", starter: true, growth: true, enterprise: true },
  { feature: "WhatsApp & SMS", starter: false, growth: true, enterprise: true },
  { feature: "Custom Channels", starter: false, growth: false, enterprise: true },
  { feature: "API Access", starter: false, growth: true, enterprise: true },
  { feature: "Webhook Integrations", starter: false, growth: true, enterprise: true },
  { feature: "Analytics Dashboard", starter: "Basic", growth: "Advanced", enterprise: "Custom" },
  { feature: "Global Coverage", starter: "1 region", growth: "Multi-region", enterprise: "Global" },
  { feature: "Uptime SLA", starter: "99%", growth: "99.9%", enterprise: "99.99%" },
  { feature: "Support", starter: "Community", growth: "Priority", enterprise: "24/7 Dedicated" },
  { feature: "SSO / SAML", starter: false, growth: false, enterprise: true },
  { feature: "Custom Model Training", starter: false, growth: false, enterprise: true },
  { feature: "On-Premise Option", starter: false, growth: false, enterprise: true },
];

const highlights = [
  { icon: Zap, title: "Intelligent AI Agents", desc: "Deploy autonomous agents that handle complex customer interactions across voice, chat, and messaging — powered by advanced language models." },
  { icon: Layers, title: "Multi-Channel Communication", desc: "Reach customers wherever they are — voice calls, web chat, WhatsApp, SMS, and more — all from a single platform." },
  { icon: Globe, title: "Global Infrastructure", desc: "Enterprise-grade infrastructure with points of presence worldwide, ensuring low-latency interactions for your global customer base." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Monitor agent performance, track conversation quality, and optimize workflows with comprehensive dashboards and reporting." },
  { icon: Shield, title: "Security & Compliance", desc: "SOC 2 compliant infrastructure with end-to-end encryption, role-based access control, and audit logging built in." },
  { icon: Headphones, title: "Scalable Architecture", desc: "From startup to enterprise — our platform scales automatically to handle millions of interactions without performance degradation." },
];

const PricingPage = () => (
  <>
    <SEOHead
      title="Pricing | vehana.ai — Transparent Plans for Every Scale"
      description="Simple, flexible pricing for AI agents. Start free, scale as you grow. No upfront commitments — pay only for what you use."
      path="/pricing"
      keywords={["pricing", "plans", "affordable", "enterprise solution", "AI agents pricing"]}
    />
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumbs */}
      <section className="container mx-auto px-4 pt-8">
        <Breadcrumb
          items={[{ label: "Pricing", href: "/pricing" }]}
          addSchema={true}
        />
      </section>

    {/* Hero */}
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 opacity-0 animate-fade-in-up">
          Pricing
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Simple, <span className="text-gradient">flexible</span> pricing
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Start free, scale effortlessly. No upfront commitments — pay only for what you use as your AI operations grow.
        </p>
        <div className="flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="outline" size="lg" className="text-base px-8 h-13 rounded-full" asChild>
            <Link to="/contact-sales">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Pricing Cards */}
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer opacity-0 animate-fade-in-up ${
                t.featured
                  ? "bg-card border-primary/40 shadow-glow scale-[1.02]"
                  : "bg-card border-border hover:border-primary/30 hover:shadow-glow"
              }`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Recommended
                </span>
              )}
              <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{t.label}</span>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{t.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={t.featured ? "hero" : "outline"} className="w-full rounded-full" asChild>
                <Link to={t.ctaLink}>
                  {t.cta}
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Compare <span className="text-gradient">plans</span>
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Find the right plan for your team and scale.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-display font-semibold text-foreground w-1/4">Feature</th>
                <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Starter</th>
                <th className="text-center py-4 px-4 font-display font-semibold text-primary">
                  <span className="inline-flex items-center gap-1.5">
                    Growth
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Popular</span>
                  </span>
                </th>
                <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr key={row.feature} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                  <td className="py-3.5 px-4 text-foreground font-medium">{row.feature}</td>
                  {(["starter", "growth", "enterprise"] as const).map((plan) => {
                    const val = row[plan];
                    return (
                      <td key={plan} className="py-3.5 px-4 text-center">
                        {val === true ? (
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        ) : val === false ? (
                          <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                        ) : (
                          <span className="text-foreground">{val}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Feature Highlights */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Everything you need to <span className="text-gradient">scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Built for teams that demand reliability, security, and performance at any scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-glow transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <h.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-24 bg-cta relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(252_56%_30%/0.4),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(280_70%_40%/0.3),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-5 opacity-0 animate-fade-in-up">
          Ready to get started?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Join thousands of teams building smarter customer experiences with AI agents.
        </p>
        <div className="flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Button variant="outline" size="lg" className="text-base  px-8 h-13 rounded-full border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
            <Link to="/contact-sales">
              Contact Sales
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
  </>
);

export default PricingPage;
