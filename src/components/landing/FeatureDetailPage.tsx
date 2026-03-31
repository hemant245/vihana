import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CTASection from "@/components/landing/CTASection";
import { type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface FeatureDetailPageProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  howItWorks: { step: string; desc: string }[];
  useCases: { title: string; desc: string }[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const FeatureDetailPage = ({
  badge,
  title,
  highlight,
  description,
  icon: Icon,
  benefits,
  howItWorks,
  useCases,
}: FeatureDetailPageProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-hero" />
        <motion.div
          className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px]"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full"
            style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-5 py-2 text-sm text-primary mb-8"
          >
            <Icon className="h-4 w-4" />
            <span className="font-medium">{badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            {title}{" "}
            <span className="text-gradient relative">
              {highlight}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
              <Link to="/dashboard/create">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 hover:bg-muted/50 transition-all" asChild>
              <Link to="/contact-sales">Talk to Sales</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits — Interactive Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
              Why Choose This
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Key <span className="text-gradient">Benefits</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                custom={i}
                onMouseEnter={() => setHoveredBenefit(i)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className={`group relative flex items-start gap-3 p-5 rounded-2xl border transition-all duration-300 cursor-default overflow-hidden ${
                  hoveredBenefit === i
                    ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/5"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className={`relative z-10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  hoveredBenefit === i ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                }`}>
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="relative z-10 text-foreground font-medium leading-snug pt-1">{b}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works — Interactive Steps */}
      <section className="py-24 bg-muted/20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
              Simple Process
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              How It <span className="text-gradient">Works</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Step Selector */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex md:flex-col gap-2"
            >
              {howItWorks.map((s, i) => (
                <motion.button
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  onClick={() => setActiveStep(i)}
                  className={`relative text-left p-4 rounded-xl transition-all duration-300 flex-1 md:flex-none ${
                    activeStep === i
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-card border border-border hover:border-primary/30 text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      activeStep === i ? "bg-primary-foreground/20" : "bg-primary/10 text-primary"
                    }`}>
                      {i + 1}
                    </div>
                    <span className="font-semibold text-sm md:text-base hidden sm:inline">{s.step}</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Step Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">Step {activeStep + 1}</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{howItWorks[activeStep].step}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed pl-[60px]">
                    {howItWorks[activeStep].desc}
                  </p>

                  {/* Progress dots */}
                  <div className="flex items-center gap-2 mt-8 pl-[60px]">
                    {howItWorks.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === activeStep ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases — Hover Cards */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
              Built For You
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Use <span className="text-gradient">Cases</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 overflow-hidden"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {uc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>

                  <motion.div
                    className="flex items-center gap-1 mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default FeatureDetailPage;
