import { Linkedin, Twitter, Github } from "lucide-react";
import vehanaLogo from "@/assets/vehana-logo.png";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Product",
    links: [
      { label: "AI Agents", path: "/ai-agents", description: "Intelligent AI agents for customer interactions" },
      { label: "Voice AI", path: "/platform/voice", description: "AI-powered voice agents for calls" },
      { label: "Chat Agents", path: "/platform/chat", description: "Real-time chat support with AI" },
      { label: "Integrations", path: "/platform/integrations", description: "Connect with your existing tools" },
      { label: "Pricing", path: "/pricing", description: "Simple, transparent pricing plans" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", path: "/contact-sales", description: "Learn about vehana.ai" },
      { label: "Contact", path: "/contact-sales", description: "Get in touch with our team" },
      { label: "Blog", path: "/contact-sales", description: "Latest news and insights" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How It Works", path: "/how-it-works", description: "Getting started guide" },
      { label: "Platform", path: "/platform", description: "Explore our platform" },
      { label: "Documentation", path: "/contact-sales", description: "Developer documentation" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/contact-sales", description: "Our privacy practices" },
      { label: "Terms of Service", path: "/contact-sales", description: "Terms and conditions" },
      { label: "Security", path: "/contact-sales", description: "Security and compliance" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      {/* Main footer content */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
            <img src={vehanaLogo} alt="Vehana - AI Agents Platform" className="h-7" />
            <span className="font-display font-bold">vehana.ai</span>
          </Link>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Intelligent AI agents for every customer interaction. Build, deploy, and scale with ease.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn - Connect with vehana on LinkedIn"
              className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter - Follow vehana on Twitter"
              className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub - View vehana repositories"
              className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navigation columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    title={link.description}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-primary-foreground/10 pt-8">
        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-primary-foreground/40 mb-4 md:mb-0">
            © 2025 vehana.ai. All rights reserved. | Made with care for better customer interactions.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-primary-foreground/60">
            <span className="flex items-center gap-1">✓ SOC 2 Certified</span>
            <span className="flex items-center gap-1">✓ GDPR Compliant</span>
            <span className="flex items-center gap-1">✓ 99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
