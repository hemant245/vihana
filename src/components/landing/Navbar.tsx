import { Button } from "@/components/ui/button";
import vehanaLogo from "@/assets/vehana-logo.png";
import {
  Menu, X, ArrowRight, ChevronDown,
  Phone, MessageSquare, PhoneCall, MessageCircle, Monitor,
  Sparkles, Link2, Wand2, BarChart3, ShieldCheck,
  Megaphone, Globe
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const platformChannels = [
  { icon: Phone, title: "Voice", desc: "AI voice agents to handle inbound & outbound calls", path: "/platform/voice" },
  { icon: MessageSquare, title: "WhatsApp Message", desc: "Engage users via WhatsApp chat 24/7", path: "/platform/whatsapp-message" },
  { icon: PhoneCall, title: "WhatsApp Call", desc: "Handle conversations via WhatsApp calls", path: "/platform/whatsapp-call" },
  { icon: MessageCircle, title: "Chat", desc: "Real-time AI chat for support & lead capture", path: "/platform/chat" },
];

const platformFeatures = [
  { icon: Sparkles, title: "Personalize Your AI Agent", desc: "Train AI based on your brand & data", path: "/platform/personalize" },
  { icon: Link2, title: "Integrations", desc: "Connect with CRM, helpdesk & more", path: "/platform/integrations" },
  { icon: Wand2, title: "No-Code Agent Studio", desc: "Build agents visually in minutes", path: "/platform/no-code-studio" },
  { icon: Megaphone, title: "Campaign Manager", desc: "Launch multi-channel AI campaigns", path: "/platform/campaign-manager" },
];

const platformExtras = [
  { icon: BarChart3, title: "Analytics & Insights", desc: "Track agent performance in real time", path: "/platform/analytics" },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "SOC 2, encryption & role-based access", path: "/platform/enterprise-security" },
  { icon: Globe, title: "Multi-Language", desc: "50+ languages with auto-detection", path: "/platform/multi-language" },
  { icon: Monitor, title: "SMS", desc: "Secure OTPs and AI-driven engagement", path: "/platform/sms" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "AI Agents", path: "/ai-agents" },
    { label: "Platform", path: "/platform", hasMega: true },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Pricing", path: "/pricing" },
  ];

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setPlatformOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setPlatformOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={vehanaLogo} alt="Vehana" className="h-8" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.hasMega ? (
              <div
                key={l.path}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                ref={dropdownRef}
              >
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${platformOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
            ) : (
              <Link
                key={l.path}
                to={l.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/contact-sales">Contact Sales</Link>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Desktop Mega Menu */}
      {platformOpen && (
        <div
          className="hidden md:block absolute left-0 right-0 top-16 z-50"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <div className="container mx-auto px-4 pt-2">
            <div className="bg-background border border-border rounded-2xl shadow-2xl shadow-foreground/5 p-8 animate-fade-in">
              <div className="grid grid-cols-3 gap-8">
                {/* Left — Channels */}
                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4 px-3">
                    Channels
                  </h4>
                  <div className="space-y-1">
                    {platformChannels.map((f) => (
                      <Link
                        key={f.title}
                        to={f.path}
                        onClick={() => setPlatformOpen(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-muted/60 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <f.icon className="h-4.5 w-4.5 text-primary" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground block leading-tight">{f.title}</span>
                          <span className="text-xs text-muted-foreground leading-snug">{f.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Middle — Features */}
                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4 px-3">
                    Features
                  </h4>
                  <div className="space-y-1">
                    {platformFeatures.map((f) => (
                      <Link
                        key={f.title}
                        to={f.path}
                        onClick={() => setPlatformOpen(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-muted/60 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <f.icon className="h-4.5 w-4.5 text-primary" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground block leading-tight">{f.title}</span>
                          <span className="text-xs text-muted-foreground leading-snug">{f.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right — More */}
                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4 px-3">
                    More
                  </h4>
                  <div className="space-y-1">
                    {platformExtras.map((f) => (
                      <Link
                        key={f.title}
                        to={f.path}
                        onClick={() => setPlatformOpen(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-muted/60 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <f.icon className="h-4.5 w-4.5 text-primary" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground block leading-tight">{f.title}</span>
                          <span className="text-xs text-muted-foreground leading-snug">{f.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* CTA inside dropdown */}
                  <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-sm font-medium text-foreground mb-2">Ready to get started?</p>
                    <p className="text-xs text-muted-foreground mb-3">Build your first AI agent in minutes.</p>
                    <Button size="sm" className="rounded-full w-full" asChild>
                      <Link to="/contact-sales" onClick={() => setPlatformOpen(false)}>
                        Contact Sales
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((l) =>
            l.hasMega ? (
              <div key={l.path}>
                <button
                  onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                  className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground py-2"
                >
                  {l.label}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobilePlatformOpen ? "rotate-180" : ""}`} />
                </button>
                {mobilePlatformOpen && (
                  <div className="pl-4 space-y-1 pb-2 animate-fade-in">
                    {[...platformChannels, ...platformFeatures, ...platformExtras].map((f) => (
                      <Link
                        key={f.title}
                        to={f.path}
                        onClick={() => { setMobileOpen(false); setMobilePlatformOpen(false); }}
                        className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <f.icon className="h-4 w-4 text-primary" />
                        {f.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.path}
                to={l.path}
                className="block text-sm text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            )
          )}
          <Button className="w-full mt-2 rounded-full" asChild>
            <Link to="/contact-sales" onClick={() => setMobileOpen(false)}>Contact Sales</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
