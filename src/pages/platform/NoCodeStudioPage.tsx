import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { Wand2 } from "lucide-react";

const NoCodeStudioPage = () => (
  <FeatureDetailPage
    badge="No-Code Studio"
    title="Build Powerful Agents"
    highlight="Without Writing Code"
    description="Create sophisticated AI agents in minutes using our visual drag-and-drop builder — no developers needed."
    icon={Wand2}
    benefits={[
      "Drag-and-drop visual builder",
      "Pre-built templates & flows",
      "Conditional logic & branching",
      "Real-time preview & testing",
      "Version control & rollback",
      "Team collaboration tools",
    ]}
    howItWorks={[
      { step: "Choose a Template", desc: "Start with a pre-built template or create from scratch." },
      { step: "Design Your Flow", desc: "Drag and drop conversation blocks, conditions, and actions." },
      { step: "Test & Deploy", desc: "Preview your agent in real time, then deploy to any channel instantly." },
    ]}
    useCases={[
      { title: "Rapid Prototyping", desc: "Build and test agent concepts in hours instead of weeks." },
      { title: "Marketing Campaigns", desc: "Create campaign-specific bots without developer dependency." },
      { title: "A/B Testing", desc: "Test different conversation flows to optimize conversion rates." },
    ]}
  />
);

export default NoCodeStudioPage;
