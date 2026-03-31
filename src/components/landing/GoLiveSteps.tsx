import { MessageSquare, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Describe your use case",
    desc: "Tell us what you want your agent to handle — in plain English. Our AI understands your intent and starts building immediately.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "Let AI build the flow",
    desc: "The platform connects the dots — setting up actions, triggers, conversation flows, and integrations automatically.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Review and launch",
    desc: "Test the experience, make quick tweaks, and deploy your agent across all channels with a single click.",
  },
];

const GoLiveSteps = () => (
  <section id="how-it-works" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block opacity-0 animate-fade-in-up">
          How It Works
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Go live with AI agents <span className="text-gradient">in minutes</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          With our guided setup, you can build, test, and launch production-ready agents — without code or complexity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="relative text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.2 + i * 0.12}s` }}
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
            )}

            <div className="relative z-10 flex flex-col items-center">
              <span className="font-display text-5xl font-bold text-primary/10 mb-2">{step.num}</span>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GoLiveSteps;
