import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { BarChart3 } from "lucide-react";

const AnalyticsPage = () => (
  <FeatureDetailPage
    badge="Analytics & Insights"
    title="Track Agent Performance in"
    highlight="Real Time"
    description="Get deep insights into agent performance, customer satisfaction, and conversation analytics with powerful dashboards."
    icon={BarChart3}
    benefits={[
      "Real-time performance dashboards",
      "Customer satisfaction scoring",
      "Conversation analytics & trends",
      "Agent comparison reports",
      "Custom metric tracking",
      "Export & scheduled reports",
    ]}
    howItWorks={[
      { step: "Connect Your Agents", desc: "All deployed agents automatically feed data into analytics." },
      { step: "Customize Dashboards", desc: "Build custom views with the metrics that matter to your business." },
      { step: "Optimize Performance", desc: "Use insights to improve agent responses and customer experience." },
    ]}
    useCases={[
      { title: "Performance Monitoring", desc: "Track resolution rates, response times, and customer satisfaction." },
      { title: "Trend Analysis", desc: "Identify trending topics and emerging customer issues early." },
      { title: "ROI Reporting", desc: "Measure cost savings and efficiency gains from AI automation." },
    ]}
  />
);

export default AnalyticsPage;
