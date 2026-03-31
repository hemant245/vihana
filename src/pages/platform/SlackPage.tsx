import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { Hash } from "lucide-react";

const SlackPage = () => (
  <FeatureDetailPage
    badge="Slack · Coming Soon"
    title="Automate Internal Workflows with"
    highlight="Slack AI Agents"
    description="Deploy AI agents in Slack to automate internal support, HR queries, IT helpdesk, and team workflows."
    icon={Hash}
    benefits={[
      "Internal support automation",
      "HR & IT helpdesk bots",
      "Channel-based workflow triggers",
      "Knowledge base integration",
      "Approval workflow automation",
      "Team productivity insights",
    ]}
    howItWorks={[
      { step: "Connect Slack Workspace", desc: "Install the Vehana app in your Slack workspace with one click." },
      { step: "Configure Bot Channels", desc: "Choose which channels the bot monitors and what it responds to." },
      { step: "Automate Workflows", desc: "Set up automated responses, escalations, and approval flows." },
    ]}
    useCases={[
      { title: "IT Helpdesk", desc: "Auto-resolve common IT issues like password resets and access requests." },
      { title: "HR Queries", desc: "Answer employee questions about policies, leave, and benefits instantly." },
      { title: "Project Updates", desc: "Automatically post project status updates and deadline reminders." },
    ]}
  />
);

export default SlackPage;
