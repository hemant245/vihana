const tools = [
  "HubSpot", "Salesforce", "Zendesk", "Freshdesk", "Slack",
  "Calendly", "Google Calendar", "Shopify", "Zapier", "Stripe",
  "Intercom", "Twilio", "Jira", "Notion",
];

const Integrations = () => (
  <section className="py-24 bg-muted/30 overflow-hidden">
    <div className="container mx-auto px-4 text-center mb-12">
      <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block opacity-0 animate-fade-in-up">
        Integrations
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Connect the tools your business uses
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Plug into your existing stack with pre-built connectors — no custom development needed.
      </p>
    </div>

    {/* Marquee row */}
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...tools, ...tools].map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="inline-flex items-center gap-2 mx-3 px-6 py-3 rounded-xl bg-card border border-border text-sm font-medium text-foreground"
          >
            <div className="w-2 h-2 rounded-full bg-primary" />
            {tool}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Integrations;
