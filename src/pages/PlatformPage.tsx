import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Platform from "@/components/landing/Platform";
import Integrations from "@/components/landing/Integrations";
import CTASection from "@/components/landing/CTASection";

const PlatformPage = () => (
  <div className="min-h-screen">
    <Navbar />
    {/* Hero */}
    <section className="relative bg-hero overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs text-muted-foreground mb-8 animate-fade-in-up">
          Platform
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          One platform to <span className="text-gradient">automate everything</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Build, deploy, and manage AI agents across every channel with a no-code visual builder, powerful integrations, and real-time analytics.
        </p>
      </div>
    </section>
    <Platform />
    <Integrations />
    <CTASection />
    <Footer />
  </div>
);

export default PlatformPage;
