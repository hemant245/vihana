import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { toast } from "@/hooks/use-toast";

const ContactSales = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Talk to Our Sales Team
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions about our AI platform? Our team is here to help you find the right solution for your business.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">

            {/* Left — Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Whether you're exploring AI agents for the first time or scaling an existing solution, we'd love to chat.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "sales@vehana.ai" },
                  { icon: Phone, label: "Phone", value: "+91 22 1234 5678" },
                  { icon: MapPin, label: "Office", value: "Powai, Mumbai, India" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-5">
                  <p className="text-sm font-medium text-foreground mb-1">Quick response guaranteed</p>
                  <p className="text-xs text-muted-foreground">
                    Our sales team typically responds within 2 business hours.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right — Form */}
            <div className="md:col-span-3">
              <Card className="border-border shadow-lg">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">Thank you!</h3>
                      <p className="text-muted-foreground max-w-sm mx-auto">
                        We've received your message. Our sales team will get back to you shortly.
                      </p>
                      <Button variant="outline" className="mt-4 rounded-full" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", message: "" }); }}>
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="John Doe" value={form.name} onChange={(e) => handleChange("name", e.target.value)} maxLength={100} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email *</Label>
                          <Input id="email" type="email" placeholder="john@company.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} maxLength={255} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" placeholder="Company name" value={form.company} onChange={(e) => handleChange("company", e.target.value)} maxLength={100} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} maxLength={20} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">How can we help? *</Label>
                        <Textarea id="message" placeholder="Tell us about your needs..." rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} maxLength={1000} />
                      </div>
                      <Button type="submit" size="lg" className="w-full rounded-full">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        By submitting, you agree to our privacy policy.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactSales;
