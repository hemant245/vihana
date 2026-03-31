import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { Link2 } from "lucide-react";

const IntegrationsPage = () => (
  <FeatureDetailPage
    badge="Integrations"
    title="Connect Your Tools for"
    highlight="Seamless Automation"
    description="Integrate with CRMs, helpdesks, payment systems, and more so your AI agents can fetch data and act in real time."
    icon={Link2}
    benefits={[
      "50+ pre-built integrations",
      "CRM & helpdesk connectors",
      "Payment gateway support",
      "Custom API webhooks",
      "Real-time data sync",
      "OAuth & secure authentication",
    ]}
    howItWorks={[
      { step: "Browse Integrations", desc: "Choose from our library of pre-built connectors for popular tools." },
      { step: "Authenticate & Connect", desc: "Securely link your accounts with one-click OAuth authentication." },
      { step: "Map Data & Actions", desc: "Configure what data flows between your tools and AI agents." },
    ]}
    useCases={[
      { title: "CRM Sync", desc: "Auto-update Salesforce, HubSpot, or Zoho with conversation data." },
      { title: "Ticket Creation", desc: "Automatically create support tickets in Zendesk or Freshdesk." },
      { title: "Payment Processing", desc: "Let agents handle payments via Stripe or Razorpay." },
    ]}
  />
);

export default IntegrationsPage;
