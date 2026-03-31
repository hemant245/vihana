import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { Phone } from "lucide-react";

const VoicePage = () => (
  <FeatureDetailPage
    badge="Voice"
    title="AI Voice Agents That"
    highlight="Handle Calls Intelligently"
    description="Deploy AI-powered voice agents that answer, assist, and automate customer calls with natural conversations."
    icon={Phone}
    benefits={[
      "24/7 automated call handling",
      "Natural language understanding",
      "Seamless handoff to human agents",
      "Multi-language voice support",
      "Call recording & analytics",
      "Custom voice & tone settings",
    ]}
    howItWorks={[
      { step: "Configure Your Agent", desc: "Set up voice preferences, language, and conversation flows using our no-code builder." },
      { step: "Connect Phone Lines", desc: "Link your existing phone numbers or provision new ones instantly." },
      { step: "Go Live", desc: "Deploy your voice agent and start handling calls automatically with real-time monitoring." },
    ]}
    useCases={[
      { title: "Customer Support", desc: "Handle FAQs, troubleshooting, and ticket creation via phone calls." },
      { title: "Appointment Booking", desc: "Let callers book, reschedule, or cancel appointments hands-free." },
      { title: "Order Status", desc: "Provide real-time order tracking and delivery updates over the phone." },
    ]}
  />
);

export default VoicePage;
