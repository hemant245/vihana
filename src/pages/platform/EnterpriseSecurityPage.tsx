import FeatureDetailPage from "@/components/landing/FeatureDetailPage";
import { ShieldCheck } from "lucide-react";

const EnterpriseSecurityPage = () => (
  <FeatureDetailPage
    badge="Enterprise Security"
    title="Built with"
    highlight="Enterprise-Grade Security"
    description="SOC 2 compliance, end-to-end encryption, role-based access control, and audit logs to keep your data safe."
    icon={ShieldCheck}
    benefits={[
      "SOC 2 Type II compliance",
      "End-to-end encryption",
      "Role-based access control (RBAC)",
      "Audit logs & activity tracking",
      "SSO & SAML integration",
      "Data residency options",
    ]}
    howItWorks={[
      { step: "Security Configuration", desc: "Set up encryption, access controls, and compliance settings." },
      { step: "Team Management", desc: "Define roles, permissions, and SSO configurations for your team." },
      { step: "Monitor & Audit", desc: "Track all activities with detailed audit logs and security alerts." },
    ]}
    useCases={[
      { title: "Regulated Industries", desc: "Meet compliance requirements for healthcare, finance, and government." },
      { title: "Enterprise Deployment", desc: "Secure multi-team deployments with granular access controls." },
      { title: "Data Privacy", desc: "Ensure customer data protection with encryption and data residency." },
    ]}
  />
);

export default EnterpriseSecurityPage;
