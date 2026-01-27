import type { ReactNode } from "react";

// Base URL for the site
export const siteConfig = {
  url: "https://kuchikirenji.dev",
  name: "Kuchiki Renji",
  title: "Kuchiki Renji | AI Engineer & Full-Stack Developer",
  description:
    "AI Engineer & Full-Stack Developer based in Fukuoka, Japan. Building production AI that moves metrics — +20% forecasting accuracy, +15% model performance.",
  locale: "en_US",
  twitter: "@Kuchiki010718",
  image: "/og-image.png",
};

// Person schema
export function PersonSchema() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kuchiki Renji",
    url: siteConfig.url,
    image: `${siteConfig.url}/avatar.png`,
    sameAs: [
      "https://x.com/Kuchiki010718",
      "https://github.com/kuchikirenji",
      "https://linkedin.com/in/kuchikirenji",
    ],
    jobTitle: "AI Engineer & Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fukuoka",
      addressCountry: "JP",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "PyTorch",
      "TensorFlow",
      "Python",
      "TypeScript",
      "React",
      "Next.js",
      "FastAPI",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    description: siteConfig.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
    />
  );
}

// Website schema
export function WebsiteSchema() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: "Kuchiki Renji",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/projects?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
    />
  );
}

// Breadcrumb schema
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  );
}

// Profile page schema
export function ProfilePageSchema() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Kuchiki Renji",
      alternateName: "朽木 恋次",
      description: siteConfig.description,
      image: `${siteConfig.url}/avatar.png`,
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
    />
  );
}

// Combine all schemas
export function StructuredData({ children }: { children?: ReactNode }) {
  return (
    <>
      <PersonSchema />
      <WebsiteSchema />
      <ProfilePageSchema />
      {children}
    </>
  );
}
