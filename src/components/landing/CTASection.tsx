import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 bg-cta relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(252_56%_30%/0.4),transparent_60%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(280_70%_40%/0.3),transparent_60%)] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-5 opacity-0 animate-fade-in-up">
        Start building your AI agent today
      </h2>
      <p className="text-primary-foreground/70 text-lg mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        No setup fees. No coding required. Go from idea to production in minutes.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <Button variant="outline" size="lg" className="text-base px-8 h-13 rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
          <Link to="/contact-sales">
            Contact Sales
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
