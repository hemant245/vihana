import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { Megaphone } from "lucide-react";

const CampaignManagerPage = () => (
  <FeatureDetailPage
    badge="Campaign Manager"
    title="Launch AI-Powered"
    highlight="Campaigns at Scale"
    description="Design, schedule, and automate multi-channel campaigns with AI agents that engage customers at the right time."
    icon={Megaphone}
    benefits={[
      "Multi-channel campaign orchestration",
      "Audience segmentation & targeting",
      "Automated scheduling & triggers",
      "A/B testing for messages",
      "Campaign performance analytics",
      "Template library & management",
    ]}
    howItWorks={[
      { step: "Create Your Campaign", desc: "Design campaigns with our visual editor and choose target channels." },
      { step: "Segment & Schedule", desc: "Define your audience segments and set up timing rules." },
      { step: "Launch & Optimize", desc: "Go live and let AI optimize delivery based on engagement data." },
    ]}
    useCases={[
      { title: "Product Launches", desc: "Announce new products across WhatsApp, SMS, and chat simultaneously." },
      { title: "Re-engagement", desc: "Win back inactive customers with personalized outreach campaigns." },
      { title: "Seasonal Promotions", desc: "Automate holiday and seasonal campaigns with pre-built templates." },
    ]}
  />
);

export default CampaignManagerPage;
