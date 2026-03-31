import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { Monitor } from "lucide-react";

const SMSPage = () => (
  <FeatureDetailPage
    badge="SMS"
    title="Secure OTPs &"
    highlight="AI-Driven SMS Engagement"
    description="Send OTPs, alerts, and AI-driven conversational messages at scale with reliable SMS delivery."
    icon={Monitor}
    benefits={[
      "High delivery rates globally",
      "OTP & verification support",
      "Two-way SMS conversations",
      "Campaign analytics & tracking",
      "Compliance & opt-out management",
      "Automated follow-up sequences",
    ]}
    howItWorks={[
      { step: "Set Up SMS Channel", desc: "Configure sender IDs, templates, and compliance settings." },
      { step: "Build Message Flows", desc: "Create automated SMS sequences, OTP flows, and conversational bots." },
      { step: "Send & Monitor", desc: "Launch campaigns and track delivery, responses, and engagement in real time." },
    ]}
    useCases={[
      { title: "OTP Verification", desc: "Send secure one-time passwords for user authentication." },
      { title: "Appointment Reminders", desc: "Reduce no-shows with automated SMS reminders and confirmations." },
      { title: "Promotional Campaigns", desc: "Drive sales with targeted SMS marketing campaigns." },
    ]}
  />
);

export default SMSPage;
