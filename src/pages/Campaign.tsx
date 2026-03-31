import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Plus, Calendar, Users } from "lucide-react";

const Campaign = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Campaigns</h2>
          <p className="text-sm text-muted-foreground">Create and manage outreach campaigns for your assistants</p>
        </div>
        <Button variant="hero">
          <Plus className="mr-1 h-4 w-4" /> New Campaign
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Welcome Onboarding", status: "Active", reach: "1,240", icon: Users, scheduled: "Running since Mar 10" },
          { title: "Payment Reminder Q1", status: "Completed", reach: "3,580", icon: Calendar, scheduled: "Ended Feb 28" },
          { title: "Product Launch Follow-up", status: "Draft", reach: "—", icon: Megaphone, scheduled: "Not scheduled" },
        ].map((c) => (
          <Card key={c.title} className="hover:border-primary/20 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  c.status === "Active" ? "bg-accent/15 text-accent" :
                  c.status === "Completed" ? "bg-muted text-muted-foreground" :
                  "bg-primary/10 text-primary"
                }`}>{c.status}</span>
              </div>
              <CardTitle className="text-lg mt-2">{c.title}</CardTitle>
              <CardDescription>{c.scheduled}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Reach</span>
                <span className="font-semibold text-foreground">{c.reach}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-xl border border-dashed border-border text-center">
        <Megaphone className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
        <h3 className="font-display font-semibold text-foreground mb-1">Launch your first campaign</h3>
        <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
          Send automated outreach via your AI assistants across WhatsApp, SMS, phone, and web channels.
        </p>
        <Button variant="hero">
          <Plus className="mr-1 h-4 w-4" /> Create Campaign
        </Button>
      </div>
    </div>
  );
};

export default Campaign;
