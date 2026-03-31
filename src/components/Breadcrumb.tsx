import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { breadcrumbSchema } from "@/lib/seo";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  addSchema?: boolean;
}

/**
 * Breadcrumb Navigation Component
 * Improves UX and SEO by showing page hierarchy
 */
export const Breadcrumb = ({ items, addSchema = true }: BreadcrumbProps) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...items,
  ];

  const schemaData =
    addSchema &&
    breadcrumbItems
      .filter((item) => item.href)
      .map((item) => ({
        name: item.label,
        url: `https://vehana.ai${item.href}`,
      }));

  return (
    <>
      {addSchema && schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema(schemaData) }}
        />
      )}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1 text-sm mb-8"
      >
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
            )}
            {item.href && index < breadcrumbItems.length - 1 ? (
              <Link
                to={item.href}
                className="text-primary hover:underline transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  index === breadcrumbItems.length - 1
                    ? "text-muted-foreground"
                    : "text-foreground"
                }
              >
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};
