import { useState } from "react";
import { Search, Settings, MessageSquare, Bug, FlaskConical, Target, BarChart3, Zap, X } from "lucide-react";

const nodes = [
  {
    icon: Search, title: "Discover", desc: "From data to deployment with zero-setup AI agents",
    details: "Automatically analyze your data sources, knowledge bases, and existing workflows to identify the best opportunities for AI automation. Our discovery engine maps your business processes and recommends optimal agent configurations.",
    features: ["Auto-scan data sources", "Workflow mapping", "Opportunity scoring", "Template recommendations"],
  },
  {
    icon: Settings, title: "Build", desc: "Create no-code AI agents in minutes",
    details: "Use our visual drag-and-drop builder to design conversation flows, set up intents, configure responses, and connect integrations — all without writing a single line of code.",
    features: ["Visual flow editor", "Intent designer", "Multi-language support", "Integration connectors"],
  },
  {
    icon: MessageSquare, title: "Respond", desc: "Deliver grounded, precise answers with Agentic RAG",
    details: "Your agents deliver accurate, contextual responses powered by Retrieval-Augmented Generation. They pull from your knowledge base in real time to ensure every answer is grounded in your actual data.",
    features: ["Agentic RAG engine", "Context-aware replies", "Source citations", "Hallucination guardrails"],
  },
  {
    icon: Bug, title: "Debug", desc: "Identify and fix issues with intelligent diagnostics",
    details: "Pinpoint exactly where conversations go wrong with step-by-step replay, intent confidence scoring, and automated issue detection. Fix problems before they impact your users.",
    features: ["Conversation replay", "Intent confidence logs", "Error detection", "Suggested fixes"],
  },
  {
    icon: FlaskConical, title: "Test", desc: "Validate agent behavior with automated test scenarios",
    details: "Run hundreds of simulated conversations to validate your agent handles edge cases, multi-turn dialogues, and unexpected inputs gracefully before going live.",
    features: ["Automated test suites", "Edge case simulation", "Regression testing", "A/B variant testing"],
  },
  {
    icon: Target, title: "Measure", desc: "Actionable insights from real-time metrics",
    details: "Track resolution rates, sentiment scores, response times, and conversion metrics across all channels. Understand exactly how your agents perform in production.",
    features: ["Real-time dashboards", "Sentiment analysis", "Resolution tracking", "Channel analytics"],
  },
  {
    icon: BarChart3, title: "Analyze", desc: "Drive continuous improvement of AI agents",
    details: "AI-powered analytics surface optimization opportunities, identify training gaps, and recommend improvements to continuously enhance your agent's performance over time.",
    features: ["Trend analysis", "Gap identification", "Optimization suggestions", "Performance benchmarks"],
  },
];

const TOTAL = nodes.length;
const RADIUS = 280; // px from center
const CENTER = 350; // center of 700x700 viewBox

const getAngle = (i: number) => ((i * 360) / TOTAL - 90) * (Math.PI / 180);

const getPoint = (i: number) => ({
  x: CENTER + RADIUS * Math.cos(getAngle(i)),
  y: CENTER + RADIUS * Math.sin(getAngle(i)),
});

const LifecycleDiagram = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <span className="block text-center text-sm font-semibold text-accent uppercase tracking-widest mb-4 opacity-0 animate-fade-in-up">Platform</span>
        <h2 className="text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          AI Agent Development & <span className="text-gradient">Deployment Lifecycle</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          A complete end-to-end platform to discover, build, test, debug, measure, and optimize intelligent agents.
        </p>

        {/* Mobile grid */}
        <div className="md:hidden space-y-3 max-w-sm mx-auto">
          {nodes.map((node, i) => (
            <div key={node.title} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.2 + i * 0.06}s` }}>
              <button
                onClick={() => setActiveNode(activeNode === i ? null : i)}
                className={`w-full text-left p-5 rounded-2xl bg-card border transition-all duration-300 ${activeNode === i ? "border-primary/40 shadow-glow" : "border-border"}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center flex-shrink-0">
                    <node.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-sm">{node.title}</h3>
                    <p className="text-xs text-muted-foreground">{node.desc}</p>
                  </div>
                </div>
              </button>
              {activeNode === i && (
                <div className="mt-2 p-5 rounded-2xl bg-card border border-primary/20 animate-fade-in-up">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{node.details}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {node.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop circular diagram — square aspect ratio for true circle */}
        <div className="hidden md:block relative max-w-[700px] mx-auto aspect-square">
          {/* SVG layer — lines + orbit circle */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 700 700" fill="none">
            {/* True circle orbit */}
            <circle cx={CENTER} cy={CENTER} r={RADIUS} stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.5" />
            {/* Lines from center to each node */}
            {nodes.map((_, i) => {
              const pt = getPoint(i);
              return (
                <line
                  key={i}
                  x1={CENTER} y1={CENTER}
                  x2={pt.x} y2={pt.y}
                  stroke={activeNode === i ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                  strokeWidth={activeNode === i ? 2 : 1}
                  strokeDasharray="4 4"
                  opacity={activeNode === i ? 0.6 : 0.2}
                />
              );
            })}
            {/* Small dots on the circle at each node position */}
            {nodes.map((_, i) => {
              const pt = getPoint(i);
              return <circle key={`dot-${i}`} cx={pt.x} cy={pt.y} r="4" fill={activeNode === i ? "hsl(var(--accent))" : "hsl(var(--primary))"} opacity={activeNode === i ? 0.8 : 0.3} />;
            })}
          </svg>

          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm shadow-glow">
              <div className="text-center px-4">
                <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-display font-bold text-foreground text-sm lg:text-base leading-tight">vehana.ai</p>
                <p className="text-xs text-muted-foreground mt-1">Lifecycle Engine</p>
              </div>
            </div>
          </div>

          {/* Nodes positioned on the circle using the same math */}
          {nodes.map((node, i) => {
            const pt = getPoint(i);
            // Convert SVG coords (0-700) to percentages
            const leftPct = (pt.x / 700) * 100;
            const topPct = (pt.y / 700) * 100;
            const isActive = activeNode === i;

            return (
              <div
                key={node.title}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 w-[160px] lg:w-[180px] opacity-0 animate-fade-in-up"
                style={{ left: `${leftPct}%`, top: `${topPct}%`, animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <button
                  onClick={() => setActiveNode(isActive ? null : i)}
                  className={`group w-full text-left p-4 lg:p-5 rounded-2xl bg-card border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "border-primary/40 shadow-glow scale-110"
                      : "border-border hover:border-primary/30 hover:shadow-glow hover:scale-105"
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <node.icon className={`h-4 w-4 ${isActive ? "text-accent" : "text-primary"}`} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-sm mb-0.5">{node.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-snug">{node.desc}</p>
                </button>
              </div>
            );
          })}
        </div>

        {/* Expanded detail panel below diagram */}
        {activeNode !== null && (
          <div className="hidden md:block max-w-2xl mx-auto mt-10">
            <div className="p-8 rounded-2xl bg-card border border-primary/20 shadow-glow animate-fade-in-up relative">
              <button onClick={() => setActiveNode(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                  {(() => { const Icon = nodes[activeNode].icon; return <Icon className="h-6 w-6 text-accent" />; })()}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg">{nodes[activeNode].title}</h3>
                  <p className="text-xs text-muted-foreground">{nodes[activeNode].desc}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{nodes[activeNode].details}</p>
              <div className="grid grid-cols-2 gap-3">
                {nodes[activeNode].features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LifecycleDiagram;
