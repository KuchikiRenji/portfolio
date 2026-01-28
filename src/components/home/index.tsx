"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import {
  ProjectsGridSkeleton,
  AboutSkeleton,
  ContactSkeleton,
} from "@/components/ui";

// Eager load hero (above the fold)
import { HeroSection } from "@/components/hero";

// Lazy load below-the-fold sections
const ProjectsShowcase = dynamic(
  () => import("@/components/projects").then((mod) => mod.ProjectsShowcase),
  {
    loading: () => <ProjectsGridSkeleton />,
    ssr: false,
  }
);

const AboutSection = dynamic(
  () => import("@/components/about").then((mod) => mod.AboutSection),
  {
    loading: () => <AboutSkeleton />,
    ssr: false,
  }
);

const ContactSection = dynamic(
  () => import("@/components/contact").then((mod) => mod.ContactSection),
  {
    loading: () => <ContactSkeleton />,
    ssr: true,
  }
);

const Footer = dynamic(
  () => import("@/components/contact").then((mod) => mod.Footer),
  {
    ssr: true,
  }
);

export function HomePage() {
  return (
    <>
      {/* Hero Section - eager loaded, above the fold */}
      <HeroSection />

      {/* Projects Showcase - 24 Case Studies */}
      <Suspense fallback={<ProjectsGridSkeleton />}>
        <ProjectsShowcase />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<AboutSkeleton />}>
        <AboutSection />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<ContactSkeleton />}>
        <ContactSection />
      </Suspense>

      {/* Footer */}
      <Footer />
    </>
  );
}
