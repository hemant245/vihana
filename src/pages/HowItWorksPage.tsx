import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import GoLiveSteps from "@/components/landing/GoLiveSteps";
import BuildSmarter from "@/components/landing/BuildSmarter";
import CTASection from "@/components/landing/CTASection";

const HowItWorksPage = () => (
  <div className="min-h-screen">
    <Navbar />
    {/* Hero */}
    <section className="relative bg-hero overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs text-muted-foreground mb-8 animate-fade-in-up">
          How It Works
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          From idea to <span className="text-gradient">live agent</span> in minutes
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Describe what you need, let AI build the flow, review and launch — it's that simple.
        </p>
      </div>
    </section>
    <GoLiveSteps />
    <BuildSmarter />
    <CTASection />
    <Footer />
  </div>
);

export default HowItWorksPage;
