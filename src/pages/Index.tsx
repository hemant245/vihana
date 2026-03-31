import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AgentShowcase from "@/components/landing/AgentShowcase";
import AIAgents from "@/components/landing/AIAgents";
import GoLiveSteps from "@/components/landing/GoLiveSteps";
import BuildSmarter from "@/components/landing/BuildSmarter";
import Integrations from "@/components/landing/Integrations";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import { SEOHead } from "@/components/SEOHead";
import { organizationSchema } from "@/lib/seo";

const Index = () => (
  <>
    <SEOHead
      title="vehana.ai — Build Dynamic AI Assistants in Minutes"
      description="Create intelligent chat and voice agents for sales, support, and operations—no-code, enterprise-ready. Deploy across 20+ channels."
      path="/"
      keywords={[
        "AI agents",
        "voice AI",
        "chatbot",
        "no-code",
        "customer service automation",
        "AI assistants",
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationSchema() }}
      />
    </SEOHead>

    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AgentShowcase />
      <AIAgents />
      <GoLiveSteps />
      <BuildSmarter />
      <Integrations />
      <CTASection />
      <Footer />
    </div>
  </>
);

export default Index;
