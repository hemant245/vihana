import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import AIAgents from "@/components/landing/AIAgents";
import AIAgentsIntro from "@/components/landing/AIAgentsIntro";
import CTASection from "@/components/landing/CTASection";

const AIAgentsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    {/* Hero */}
    <section className="relative bg-hero overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs text-muted-foreground mb-8 animate-fade-in-up">
          AI Agents
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Meet your <span className="text-gradient">AI workforce</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Specialized agents that onboard, support, decide, and execute autonomously across your entire operation.
        </p>
      </div>
    </section>
    <AIAgentsIntro />
    <AIAgents />
    <CTASection />
    <Footer />
  </div>
);

export default AIAgentsPage;
