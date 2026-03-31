import { Helmet } from "react-helmet-async";
import { SEOConfig, getCanonicalUrl } from "@/lib/seo";

interface SEOHeadProps extends SEOConfig {
  path?: string;
  children?: React.ReactNode;
}

/**
 * SEO Head Component
 * Manages all meta tags, canonical URLs, and OG tags for better SEO
 * Usage: <SEOHead title="..." description="..." path="/your-page" />
 */
export const SEOHead = ({
  title,
  description,
  path = "/",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/48ec38c1-6b90-420d-8d2f-c69705af4543/id-preview-632c8dec--1b9e1073-f59f-40c5-abe0-01aed565005a.lovable.app-1774273727322.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  keywords = [],
  author = "vehana.ai",
  robots = "index, follow",
  noindex = false,
  langAlternates = [],
  children,
}: SEOHeadProps) => {
  const canonicalUrl = canonical || getCanonicalUrl(path);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : robots} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Language Alternates */}
      {langAlternates.map((alt) => (
        <link
          key={alt.lang}
          rel="alternate"
          hrefLang={alt.lang}
          href={alt.href}
        />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="vehana.ai" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@vehana_ai" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta
        name="twitter:description"
        content={twitterDescription || ogDescription || description}
      />
      <meta name="twitter:image" content={twitterImage || ogImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3f51b5" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      {/* JSON-LD will be added separately in specific components */}
      {children}
    </Helmet>
  );
};
