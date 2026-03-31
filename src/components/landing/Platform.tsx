import { Sparkles, Wand2, Link2, Phone, MessageCircle, MessageSquare, PhoneCall, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  { icon: Sparkles, title: "Personalize Your AI Agent", desc: "Train agents on your brand, policies and data for tailored responses.", path: "/platform/personalize" },
  { icon: Wand2, title: "No-Code Agent Studio", desc: "Create powerful AI Agents with no-code in minutes using our visual builder.", path: "/platform/no-code-studio" },
  { icon: Link2, title: "Integrations", desc: "Connect your tools so agents can fetch data and act in real time.", path: "/platform/integrations" },
  { icon: Megaphone, title: "Campaign Manager", desc: "Launch and automate multi-channel campaigns powered by AI agents.", path: "/platform/campaign-manager" },
];

const channels = [
  { icon: Phone, title: "Voice", desc: "AI voice agents that answer, assist, and automate customer calls.", path: "/platform/voice" },
  { icon: MessageSquare, title: "WhatsApp Message", desc: "AI agents to sell, support, and engage customers 24/7 on WhatsApp.", path: "/platform/whatsapp-message" },
  { icon: PhoneCall, title: "WhatsApp Call", desc: "AI Agents that handle your customer conversations over WhatsApp Call.", path: "/platform/whatsapp-call" },
  { icon: MessageCircle, title: "Chat", desc: "Real-time AI chat agents for support, lead capture, and retention.", path: "/platform/chat" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const PlatformCard = ({ icon: Icon, title, desc, badge, path, index }: { icon: any; title: string; desc: string; badge?: string; path: string; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div variants={fadeUp} custom={index}>
      <Link
        to={path}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex gap-4 p-5 rounded-xl transition-all duration-300 overflow-hidden"
      >
        {/* Hover background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl"
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className={`relative z-10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          hovered ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-primary/10 text-primary"
        }`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display font-semibold text-foreground text-base group-hover:text-primary transition-colors">{title}</h3>
            {badge && (
              <span className="text-[10px] font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5">
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          <motion.div
            className="flex items-center gap-1 text-primary text-xs font-medium mt-2"
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
            transition={{ duration: 0.2 }}
          >
            Learn more <ArrowRight className="h-3 w-3" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

const Platform = () => {
  const [activeTab, setActiveTab] = useState<"all" | "features" | "channels">("all");

  const showFeatures = activeTab === "all" || activeTab === "features";
  const showChannels = activeTab === "all" || activeTab === "channels";

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
            Platform
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to <span className="text-gradient">automate intelligently</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A complete platform to build, deploy, and manage AI agents across every channel.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-10"
        >
          {(["all", "features", "channels"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10 shadow-xl shadow-foreground/[0.02]"
          >
            <motion.div layout className="grid md:grid-cols-3 gap-0">
              {/* Features Column */}
              {showFeatures && (
                <motion.div
                  layout
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={showChannels ? "" : "md:col-span-3"}
                >
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 px-5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Features
                  </h4>
                  <div className="space-y-1">
                    {features.map((f, i) => (
                      <PlatformCard key={f.title} {...f} index={i} />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Channels */}
              {showChannels && (
                <>
                  <motion.div
                    layout
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 px-5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Channels
                    </h4>
                    <div className="space-y-1">
                      {channels.slice(0, 2).map((c, i) => (
                        <PlatformCard key={c.title} {...c} index={i + features.length} />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    layout
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 px-5 opacity-0 md:opacity-100">&nbsp;</h4>
                    <div className="space-y-1">
                      {channels.slice(2).map((c, i) => (
                        <PlatformCard key={c.title} {...c} index={i + features.length + 2} />
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
