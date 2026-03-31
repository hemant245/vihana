import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { Sparkles } from "lucide-react";

const PersonalizePage = () => (
  <FeatureDetailPage
    badge="Personalization"
    title="Train AI on"
    highlight="Your Brand & Data"
    description="Customize AI agents with your brand voice, policies, product knowledge, and customer data for tailored responses."
    icon={Sparkles}
    benefits={[
      "Brand voice customization",
      "Train on your knowledge base",
      "Policy-aware responses",
      "Product catalog integration",
      "Continuous learning from feedback",
      "Multi-brand support",
    ]}
    howItWorks={[
      { step: "Upload Your Data", desc: "Import FAQs, documents, product info, and company policies." },
      { step: "Configure Brand Voice", desc: "Set tone, language style, and response guidelines for your brand." },
      { step: "Deploy & Refine", desc: "Launch your personalized agent and improve it with ongoing feedback." },
    ]}
    useCases={[
      { title: "Brand-Consistent Support", desc: "Ensure every customer interaction matches your brand voice." },
      { title: "Product Expert Bot", desc: "Create agents that know every detail about your product catalog." },
      { title: "Policy Compliance", desc: "Agents that follow your company policies in every response." },
    ]}
  />
);

export default PersonalizePage;
