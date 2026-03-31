import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What channels can I deploy my assistant to?", a: "You can deploy to website chat, WhatsApp, SMS, phone (voice), Slack, Microsoft Teams, and more. New channels are added regularly." },
  { q: "Do I need coding skills to use vehana.ai?", a: "Not at all. Our visual workflow builder is designed for non‑technical users. You can create sophisticated AI assistants entirely with drag‑and‑drop." },
  { q: "Can my assistant handle voice calls?", a: "Yes! vehana.ai supports AI‑powered voice agents that can handle inbound and outbound calls with natural‑sounding speech." },
  { q: "How secure is my data?", a: "We are SOC 2 Type II compliant with end‑to‑end encryption, data isolation, and GDPR compliance. Enterprise plans include additional security options." },
  { q: "Can I integrate with my existing tools?", a: "Absolutely. We offer pre‑built connectors for popular CRMs, helpdesks, and databases, plus a REST API for custom integrations." },
  { q: "What kind of support do you offer?", a: "Starter plans include community support. Pro plans get priority email support. Enterprise plans include a dedicated customer success manager and SLA." },
];

const FAQ = () => (
  <section id="faq" className="py-28 bg-muted/30 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 max-w-3xl relative z-10">
      <span className="block text-center text-sm font-semibold text-accent uppercase tracking-widest mb-4 opacity-0 animate-fade-in-up">FAQ</span>
      <h2 className="text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Frequently asked <span className="text-gradient">questions</span>
      </h2>
      <p className="text-center text-muted-foreground mb-16 text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Everything you need to know about vehana.ai
      </p>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border border-border rounded-2xl px-7 data-[state=open]:shadow-glow data-[state=open]:border-primary/20 transition-all duration-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.2 + i * 0.06}s` }}
          >
            <AccordionTrigger className="font-display font-semibold text-foreground text-left hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
