import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { MessageSquare } from "lucide-react";

const WhatsAppMessagePage = () => (
  <FeatureDetailPage
    badge="WhatsApp Message"
    title="Engage Customers on"
    highlight="WhatsApp 24/7"
    description="AI agents that sell, support, and engage customers round-the-clock on the world's most popular messaging platform."
    icon={MessageSquare}
    benefits={[
      "Instant automated responses",
      "Rich media support (images, docs, buttons)",
      "Template message management",
      "Customer segmentation & targeting",
      "Conversation history tracking",
      "Broadcast & campaign support",
    ]}
    howItWorks={[
      { step: "Connect WhatsApp Business API", desc: "Link your WhatsApp Business account with our platform in minutes." },
      { step: "Design Conversation Flows", desc: "Build interactive message flows with quick replies, buttons, and media." },
      { step: "Automate & Scale", desc: "Let AI handle thousands of conversations simultaneously with consistent quality." },
    ]}
    useCases={[
      { title: "E-commerce Support", desc: "Help customers browse products, track orders, and process returns." },
      { title: "Lead Qualification", desc: "Automatically qualify leads and route hot prospects to your sales team." },
      { title: "Feedback Collection", desc: "Gather customer feedback and NPS scores through conversational surveys." },
    ]}
  />
);

export default WhatsAppMessagePage;
