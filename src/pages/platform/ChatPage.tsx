import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { MessageCircle } from "lucide-react";

const ChatPage = () => (
  <FeatureDetailPage
    badge="Chat"
    title="Real-Time AI Chat for"
    highlight="Support & Lead Capture"
    description="Deploy intelligent chat agents on your website that provide instant support, capture leads, and drive conversions."
    icon={MessageCircle}
    benefits={[
      "Instant website chat support",
      "Lead capture & qualification",
      "Custom branding & styling",
      "Multi-page tracking",
      "Typing indicators & read receipts",
      "File sharing & rich responses",
    ]}
    howItWorks={[
      { step: "Add Chat Widget", desc: "Embed the chat widget on your website with a single line of code." },
      { step: "Configure AI Responses", desc: "Train the agent on your FAQs, products, and company knowledge base." },
      { step: "Engage Visitors", desc: "Automatically greet visitors, answer questions, and capture contact info." },
    ]}
    useCases={[
      { title: "Website Support", desc: "Provide instant answers to visitor questions without wait times." },
      { title: "Lead Generation", desc: "Capture visitor details and qualify them before passing to sales." },
      { title: "Onboarding Assistance", desc: "Guide new users through product setup and feature discovery." },
    ]}
  />
);

export default ChatPage;
