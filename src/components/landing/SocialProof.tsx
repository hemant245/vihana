import { Star } from "lucide-react";

const logos = ["TechCorp", "ScaleUp", "Flowbase", "DataSync", "Nextera", "CloudPeak"];

const testimonials = [
  {
    quote: "vehana.ai cut our support response time by 70%. The no‑code builder made it incredibly easy to set up.",
    name: "Sarah Chen",
    role: "VP of Customer Success, TechCorp",
    rating: 5,
  },
  {
    quote: "We deployed a sales assistant across web and WhatsApp in under a day. The ROI was immediate.",
    name: "Marcus Williams",
    role: "Head of Growth, ScaleUp",
    rating: 5,
  },
  {
    quote: "The voice agent handles 80% of our collection calls autonomously. Game changer for our operations team.",
    name: "Priya Sharma",
    role: "Director of Operations, DataSync",
    rating: 5,
  },
];

const SocialProof = () => (
  <section className="py-28 bg-muted/30 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <span className="block text-center text-sm font-semibold text-accent uppercase tracking-widest mb-4 opacity-0 animate-fade-in-up">Social Proof</span>
      <h2 className="text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Trusted by <span className="text-gradient">growing teams</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-lg mx-auto mb-16 text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Join hundreds of companies already scaling with AI agents.
      </p>

      {/* Logos */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-20 max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        {logos.map((l) => (
          <div key={l} className="px-8 py-4 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5">
            <span className="font-display font-bold text-muted-foreground/60 text-sm tracking-wider uppercase">{l}</span>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.25 + i * 0.1}s` }}
          >
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 text-sm">{t.quote}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{t.name[0]}</span>
              </div>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
