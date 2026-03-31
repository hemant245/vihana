import { Linkedin, Twitter, Github } from "lucide-react";
import vehanaLogo from "@/assets/vehana-logo.png";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Product",
    links: [
      { label: "AI Agents", path: "/ai-agents" },
      { label: "Voice AI", path: "/platform/voice" },
      { label: "Chat Agents", path: "/platform/chat" },
      { label: "Integrations", path: "/platform/integrations" },
      { label: "Pricing", path: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", path: "/contact-sales" },
      { label: "Contact", path: "/contact-sales" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How It Works", path: "/how-it-works" },
      { label: "Platform", path: "/platform" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/contact-sales" },
      { label: "Terms of Service", path: "/contact-sales" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={vehanaLogo} alt="Vehana" className="h-7" />
          </Link>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Intelligent AI agents for every customer interaction.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary-foreground/10">
        <p className="text-xs text-primary-foreground/40 mb-4 md:mb-0">© 2025 vehana.ai. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"><Github className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
