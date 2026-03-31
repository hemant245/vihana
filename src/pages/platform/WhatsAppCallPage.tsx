import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { PhoneCall } from "lucide-react";

const WhatsAppCallPage = () => (
  <FeatureDetailPage
    badge="WhatsApp Call"
    title="Handle Conversations via"
    highlight="WhatsApp Calls"
    description="AI agents that manage customer conversations over WhatsApp voice calls with natural, human-like interactions."
    icon={PhoneCall}
    benefits={[
      "Voice-based customer engagement",
      "Automatic call routing",
      "Real-time transcription",
      "Multilingual support",
      "Call quality monitoring",
      "Integration with CRM systems",
    ]}
    howItWorks={[
      { step: "Enable WhatsApp Calling", desc: "Activate voice calling on your WhatsApp Business account." },
      { step: "Train Your AI Agent", desc: "Configure voice responses, scripts, and escalation rules." },
      { step: "Start Handling Calls", desc: "Deploy and monitor AI-powered WhatsApp calls with real-time dashboards." },
    ]}
    useCases={[
      { title: "Technical Support", desc: "Walk customers through troubleshooting steps via voice guidance." },
      { title: "Sales Consultations", desc: "Provide personalized product recommendations over WhatsApp calls." },
      { title: "Account Verification", desc: "Securely verify customer identity through voice-based authentication." },
    ]}
  />
);

export default WhatsAppCallPage;
