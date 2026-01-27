import type { Metadata } from "next";
import { BreadcrumbSchema, siteConfig } from "@/lib/structured-data";
import { HomePage } from "@/components/home";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: "/api/og?title=Kuchiki%20Renji&subtitle=AI%20Engineer%20%26%20Full-Stack%20Developer",
        width: 1200,
        height: 630,
        alt: "Kuchiki Renji Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      "/api/og?title=Kuchiki%20Renji&subtitle=AI%20Engineer%20%26%20Full-Stack%20Developer",
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />

      {/* Home page content (client component) */}
      <HomePage />
    </>
  );
}
