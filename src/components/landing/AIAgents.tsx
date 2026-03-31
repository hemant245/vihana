import { 
  UserPlus, Headphones, TrendingUp, MessageCircle, 
  Cog, GitBranch, Calculator, Bot,
  BarChart3, Plug, Bell, ShieldCheck,
  FileText, Search, ArrowRight
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    label: "Customer Interaction Agents",
    description: "Front-line AI agents that engage customers across every touchpoint — from first contact to ongoing support.",
    agents: [
      { name: "ARIA", role: "Onboarding Specialist", desc: "Guides new users through signup and setup, collecting profile data and preferences conversationally while ensuring a frictionless first experience.", icon: UserPlus, color: "from-primary/10 to-primary/5" },
      { name: "REVA", role: "Support Champion", desc: "Resolves customer queries in real time using your knowledge base — delivering fast, accurate, and empathetic assistance 24/7.", icon: Headphones, color: "from-secondary/10 to-secondary/5" },
      { name: "NOVA", role: "Sales Engager", desc: "Identifies high-intent prospects and engages them across chat, email, and SMS with personalized outreach that converts.", icon: TrendingUp, color: "from-primary/10 to-accent/5" },
      { name: "LUMI", role: "Conversational Guide", desc: "Powers natural multi-turn conversations on your website and app, understanding context and guiding users to the right outcome.", icon: MessageCircle, color: "from-secondary/10 to-primary/5" },
    ],
  },
  {
    label: "Workflow & Decision Agents",
    description: "Intelligent orchestrators that automate processes, enforce business rules, and execute complex decisions autonomously.",
    agents: [
      { name: "ORION", role: "Workflow Orchestrator", desc: "Coordinates end-to-end workflows across teams and systems, monitors progress, and escalates exceptions before they become problems.", icon: GitBranch, color: "from-primary/10 to-primary/5" },
      { name: "SAGE", role: "Rules Adjudicator", desc: "Evaluates inputs against configurable business rules and policies, producing consistent, auditable decisions at scale.", icon: ShieldCheck, color: "from-secondary/10 to-secondary/5" },
      { name: "VEGA", role: "Process Automator", desc: "Handles repetitive operational tasks — from data entry to approval routing — freeing your team for strategic work.", icon: Cog, color: "from-primary/10 to-accent/5" },
      { name: "CALYX", role: "Computational Engine", desc: "Performs complex calculations, scoring models, and predictive assessments in real time to power informed decision-making.", icon: Calculator, color: "from-secondary/10 to-primary/5" },
    ],
  },
  {
    label: "Analytics & Backend Agents",
    description: "Behind-the-scenes agents that extract insights, manage integrations, and generate documents — invisible but indispensable.",
    agents: [
      { name: "ATLAS", role: "Analytics Ace", desc: "Delivers dashboards, KPIs, and custom reports on demand — turning raw data into actionable business intelligence via simple queries.", icon: BarChart3, color: "from-primary/10 to-primary/5" },
      { name: "NEXUS", role: "Integration Router", desc: "Connects to third-party APIs and services, managing data flow, deduplication, and audit trails across your entire tech stack.", icon: Plug, color: "from-secondary/10 to-secondary/5" },
      { name: "ECHO", role: "Anomaly Detector", desc: "Continuously monitors data streams for inconsistencies, fraud signals, and outliers — alerting your team before issues escalate.", icon: Search, color: "from-primary/10 to-accent/5" },
      { name: "DOCU", role: "Document Generator", desc: "Creates business-ready documents — contracts, statements, reports — on demand with dynamic templates and real-time data injection.", icon: FileText, color: "from-secondary/10 to-primary/5" },
    ],
  },
];

const AgentCard = ({
  agent,
  onClick,
}: {
  agent: (typeof categories)[0]["agents"][0];
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="group text-left w-full p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-glow transition-all duration-300 cursor-pointer"
  >
    <div className="flex items-start gap-4">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
      >
        <agent.icon className="h-6 w-6 text-primary" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-display font-bold text-foreground text-base">{agent.name}</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">{agent.role}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{agent.desc}</p>
      </div>
    </div>
  </button>
);

const AgentModal = ({
  agent,
  onClose,
}: {
  agent: (typeof categories)[0]["agents"][0] | null;
  onClose: () => void;
}) => {
  if (!agent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-card rounded-3xl border border-border shadow-2xl max-w-md w-full mx-4 p-8 animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center`}>
            <agent.icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-bold text-foreground text-xl">{agent.name}</h3>
            <span className="text-sm font-medium text-primary">{agent.role}</span>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">{agent.desc}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Bot className="h-3.5 w-3.5" /><span>Autonomous</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Bell className="h-3.5 w-3.5" /><span>Real-time alerts</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" /><span>Secure</span>
          </div>
        </div>
        <button onClick={onClose} className="mt-6 w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Close
        </button>
      </div>
    </div>
  );
};

const AIAgents = () => {
  const [selectedAgent, setSelectedAgent] = useState<(typeof categories)[0]["agents"][0] | null>(null);

  return (
    <section id="ai-agents" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">Our Agents</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            More impact with <span className="text-gradient">every agent</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Meet your AI workforce — specialized agents that onboard, support, decide, and execute autonomously across your entire operation.
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-secondary" />
                <h3 className="font-display font-bold text-foreground text-xl md:text-2xl">{cat.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 ml-5">{cat.description}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.agents.map((agent) => (
                  <AgentCard key={agent.name} agent={agent} onClick={() => setSelectedAgent(agent)} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/contact-sales"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            See all agents in action
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
    </section>
  );
};

export default AIAgents;
