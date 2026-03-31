import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AgentShowcase from "@/components/landing/AgentShowcase";
import AIAgents from "@/components/landing/AIAgents";
import GoLiveSteps from "@/components/landing/GoLiveSteps";
import BuildSmarter from "@/components/landing/BuildSmarter";
import Integrations from "@/components/landing/Integrations";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
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
);

export default Index;
