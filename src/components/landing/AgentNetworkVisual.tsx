import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus, Headphones, TrendingUp, MessageCircle,
  GitBranch, ShieldCheck, Cog, Calculator,
  BarChart3, Plug, Search, FileText,
} from "lucide-react";

const agents = [
  { name: "ARIA", role: "Onboarding", icon: UserPlus, category: "interaction", angle: 0 },
  { name: "REVA", role: "Support", icon: Headphones, category: "interaction", angle: 30 },
  { name: "NOVA", role: "Sales", icon: TrendingUp, category: "interaction", angle: 60 },
  { name: "LUMI", role: "Conversational", icon: MessageCircle, category: "interaction", angle: 90 },
  { name: "ORION", role: "Orchestrator", icon: GitBranch, category: "workflow", angle: 120 },
  { name: "SAGE", role: "Adjudicator", icon: ShieldCheck, category: "workflow", angle: 150 },
  { name: "VEGA", role: "Automator", icon: Cog, category: "workflow", angle: 180 },
  { name: "CALYX", role: "Computation", icon: Calculator, category: "workflow", angle: 210 },
  { name: "ATLAS", role: "Analytics", icon: BarChart3, category: "analytics", angle: 240 },
  { name: "NEXUS", role: "Integration", icon: Plug, category: "analytics", angle: 270 },
  { name: "ECHO", role: "Anomaly", icon: Search, category: "analytics", angle: 300 },
  { name: "DOCU", role: "Documents", icon: FileText, category: "analytics", angle: 330 },
];

const categoryColors: Record<string, string> = {
  interaction: "hsl(var(--primary))",
  workflow: "hsl(252, 56%, 65%)",
  analytics: "hsl(210, 60%, 55%)",
};

const categoryLabels: Record<string, string> = {
  interaction: "Customer Interaction",
  workflow: "Workflow & Decision",
  analytics: "Analytics & Backend",
};

const AgentNetworkVisual = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Responsive radius
  const radius = 180;
  const centerX = 250;
  const centerY = 250;

  const filteredAgents = selectedCategory
    ? agents.filter((a) => a.category === selectedCategory)
    : agents;

  return (
    <div className="w-full">
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            !selectedCategory
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          All Agents
        </button>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedCategory === key
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Network diagram */}
      <div className="relative mx-auto" style={{ maxWidth: 500, aspectRatio: "1/1" }}>
        {/* SVG connections */}
        <svg
          viewBox="0 0 500 500"
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        >
          {/* Orbital rings */}
          {[120, 180].map((r) => (
            <circle
              key={r}
              cx={centerX}
              cy={centerY}
              r={r}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="4 6"
              opacity={0.5}
            />
          ))}

          {/* Connection lines */}
          <AnimatePresence>
            {filteredAgents.map((agent) => {
              const rad = (agent.angle * Math.PI) / 180;
              const x = centerX + radius * Math.cos(rad);
              const y = centerY + radius * Math.sin(rad);
              const isActive = hovered === agent.name || !hovered;
              return (
                <motion.line
                  key={`line-${agent.name}`}
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke={categoryColors[agent.category]}
                  strokeWidth={hovered === agent.name ? 2.5 : 1}
                  opacity={isActive ? 0.4 : 0.08}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.05 * agents.indexOf(agent) }}
                />
              );
            })}
          </AnimatePresence>

          {/* Animated pulse at center */}
          <motion.circle
            cx={centerX}
            cy={centerY}
            r={30}
            fill="hsl(var(--primary))"
            opacity={0.08}
            animate={{ r: [30, 45, 30], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Center hub */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
          animate={{ scale: hovered ? 0.9 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-xl shadow-primary/30">
            <span className="text-primary-foreground font-display font-bold text-xs md:text-sm">VEHANA</span>
          </div>
        </motion.div>

        {/* Agent nodes */}
        <AnimatePresence mode="popLayout">
          {filteredAgents.map((agent, i) => {
            const totalAgents = filteredAgents.length;
            const angle = selectedCategory
              ? (360 / totalAgents) * i - 90
              : agent.angle;
            const rad = (angle * Math.PI) / 180;
            const x = 50 + (radius / 250) * 50 * Math.cos(rad);
            const y = 50 + (radius / 250) * 50 * Math.sin(rad);
            const isHovered = hovered === agent.name;

            return (
              <motion.div
                key={agent.name}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  zIndex: isHovered ? 20 : 5,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.04 }}
                onMouseEnter={() => setHovered(agent.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div
                  className="relative cursor-pointer"
                  animate={{ scale: isHovered ? 1.25 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {/* Glow */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${categoryColors[agent.category]}33 0%, transparent 70%)`,
                        transform: "scale(2.5)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  {/* Node */}
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 bg-card shadow-lg transition-colors duration-300"
                    style={{
                      borderColor: isHovered
                        ? categoryColors[agent.category]
                        : "hsl(var(--border))",
                    }}
                  >
                    <agent.icon
                      className="h-5 w-5 md:h-6 md:w-6 transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? categoryColors[agent.category]
                          : "hsl(var(--muted-foreground))",
                      }}
                    />
                  </div>

                  {/* Label */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                    style={{ top: "calc(100% + 6px)" }}
                    animate={{ opacity: isHovered ? 1 : 0.7 }}
                  >
                    <span
                      className="text-[10px] md:text-xs font-display font-bold block text-center transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? categoryColors[agent.category]
                          : "hsl(var(--foreground))",
                      }}
                    >
                      {agent.name}
                    </span>
                    {isHovered && (
                      <motion.span
                        className="text-[9px] md:text-[10px] text-muted-foreground block text-center"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {agent.role}
                      </motion.span>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AgentNetworkVisual;
