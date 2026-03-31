import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-hero overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs text-muted-foreground mb-8 opacity-0 animate-fade-in-up">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Now with voice agent support</span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.08] mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Intelligent AI agents{" "}
          <br className="hidden md:block" />
          that <span className="text-gradient">just work</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          No code. No complexity. Build reliable voice and chat agents that automate your most critical customer interactions in minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="text-base px-8 h-13 rounded-full shadow-lg shadow-primary/20" asChild>
            <Link to="/contact-sales">
              Get Started Now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 h-13 rounded-full" asChild>
            <Link to="/contact-sales">Book a Demo</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          {[
            { value: "10K+", label: "Agents Created" },
            { value: "50M+", label: "Conversations" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "200+", label: "Enterprises" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
