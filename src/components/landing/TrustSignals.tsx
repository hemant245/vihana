import { ShieldCheck, Award, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Trust Signals Component
 * Displays key trust indicators prominently
 * Improves credibility and conversion rates
 */
export const TrustSignals = () => {
  const signals = [
    {
      icon: ShieldCheck,
      title: "SOC 2 Certified",
      description: "Enterprise-grade security & compliance",
    },
    {
      icon: Award,
      title: "99.9% Uptime SLA",
      description: "Guaranteed reliability for your business",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second response times",
    },
    {
      icon: Users,
      title: "200+ Enterprises",
      description: "Trusted by leading companies",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {signals.map((signal) => {
        const Icon = signal.icon;
        return (
          <motion.div
            key={signal.title}
            className="flex flex-col items-center text-center p-4"
            variants={itemVariants}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-sm md:text-base text-foreground mb-1">
              {signal.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {signal.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
