/**
 * SEO Utilities for vehana.ai
 * Handles meta tags, structured data, and SEO optimization
 */

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  keywords?: string[];
  author?: string;
  robots?: string;
  noindex?: boolean;
  langAlternates?: Array<{ lang: string; href: string }>;
}

export interface SchemaData {
  type: string;
  [key: string]: any;
}

/**
 * Generate JSON-LD structured data for search engines
 */
export const generateSchema = (data: SchemaData): string => {
  return JSON.stringify({
    "@context": "https://schema.org",
    ...data,
  });
};

/**
 * Organization schema for homepage
 */
export const organizationSchema = () =>
  generateSchema({
    "@type": "Organization",
    name: "vehana.ai",
    url: "https://vehana.ai",
    logo: "https://vehana.ai/logo.png",
    description: "Build Dynamic AI Assistants in Minutes",
    sameAs: [
      "https://twitter.com/vehana",
      "https://linkedin.com/company/vehana",
      "https://github.com/vehana",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: "https://vehana.ai/contact-sales",
    },
  });

/**
 * Product schema for platform pages
 */
export const productSchema = (
  name: string,
  description: string,
  imageUrl: string,
  rating: number = 4.8
) =>
  generateSchema({
    "@type": "Product",
    name,
    description,
    image: imageUrl,
    brand: {
      "@type": "Brand",
      name: "vehana.ai",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      ratingCount: 150,
    },
  });

/**
 * FAQ schema for FAQ pages
 */
export const faqSchema = (
  faqs: Array<{ question: string; answer: string }>
) =>
  generateSchema({
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });

/**
 * Breadcrumb schema
 */
export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) =>
  generateSchema({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });

/**
 * Service schema for platform features
 */
export const serviceSchema = (
  name: string,
  description: string,
  provider: string = "vehana.ai"
) =>
  generateSchema({
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://vehana.ai",
    },
    areaServed: "Worldwide",
  });

/**
 * Default SEO metadata for pages
 */
export const defaultSEO: SEOConfig = {
  title: "vehana.ai — Build Dynamic AI Assistants in Minutes",
  description:
    "Create intelligent chat and voice agents for sales, support, and operations—no-code, enterprise-ready.",
  ogType: "website",
  twitterCard: "summary_large_image",
  robots: "index, follow",
  author: "vehana.ai",
};

/**
 * Page-specific SEO configs
 */
export const pageSEOConfig: Record<string, SEOConfig> = {
  "/": {
    title: "vehana.ai — Build Dynamic AI Assistants in Minutes",
    description:
      "Create intelligent chat and voice agents for sales, support, and operations—no-code, enterprise-ready.",
    keywords: [
      "AI agents",
      "chatbot",
      "voice AI",
      "no-code",
      "customer service",
    ],
  },
  "/platform": {
    title: "Platform | vehana.ai — AI Agent Platform",
    description:
      "Explore our comprehensive platform with voice agents, chat, SMS, WhatsApp, and more integrations.",
    keywords: ["AI platform", "omnichannel", "AI assistants", "no-code studio"],
  },
  "/ai-agents": {
    title: "AI Agents | vehana.ai — Solution for Business",
    description:
      "Discover how AI agents can transform your business operations across sales, support, and operations.",
    keywords: ["AI agents", "intelligent automation", "business solutions"],
  },
  "/pricing": {
    title: "Pricing | vehana.ai — Transparent Plans for Every Scale",
    description:
      "Simple, transparent pricing. Start free and scale as you grow. No hidden fees.",
    keywords: ["pricing", "plans", "affordable", "enterprise solution"],
  },
  "/how-it-works": {
    title: "How It Works | vehana.ai — Step-by-Step Guide",
    description:
      "Learn how vehana.ai helps you build and deploy AI agents in minutes.",
    keywords: ["how to", "getting started", "tutorial", "setup guide"],
  },
  "/contact-sales": {
    title: "Contact Sales | vehana.ai — Get Started Today",
    description: "Schedule a demo or talk to our sales team about enterprise options.",
    keywords: ["contact", "sales", "demo", "enterprise"],
  },
};

/**
 * Get SEO config for a specific page
 */
export const getSEOConfig = (path: string): SEOConfig => {
  return pageSEOConfig[path] || defaultSEO;
};

/**
 * Generate canonical URL
 */
export const getCanonicalUrl = (path: string = "/"): string => {
  return `https://vehana.ai${path}`;
};
