import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { Globe } from "lucide-react";

const MultiLanguagePage = () => (
  <FeatureDetailPage
    badge="Multi-Language"
    title="Engage Customers in"
    highlight="Their Language"
    description="Deploy AI agents that speak 50+ languages with automatic detection, translation, and culturally-aware responses."
    icon={Globe}
    benefits={[
      "50+ languages supported",
      "Automatic language detection",
      "Real-time translation",
      "Culturally-aware responses",
      "Regional dialect support",
      "Language-specific analytics",
    ]}
    howItWorks={[
      { step: "Enable Languages", desc: "Select which languages your AI agent should support." },
      { step: "Auto-Detect & Respond", desc: "The agent automatically detects the user's language and responds accordingly." },
      { step: "Localize & Refine", desc: "Fine-tune responses for cultural nuances and regional preferences." },
    ]}
    useCases={[
      { title: "Global Support", desc: "Provide customer support in every market without hiring multilingual teams." },
      { title: "International E-commerce", desc: "Help shoppers browse and buy in their preferred language." },
      { title: "Travel & Hospitality", desc: "Assist guests and travelers in their native language." },
    ]}
  />
);

export default MultiLanguagePage;
