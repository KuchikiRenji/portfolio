"use client";

import { ReactNode, Suspense, lazy } from "react";
import { ThemeProvider } from "./theme-provider";
import { LenisProvider } from "./lenis-provider";
import { Toaster } from "sonner";
import { SkipLink } from "@/components/ui";

// Lazy load cursor trail (desktop only, non-critical)
const CursorTrail = lazy(() =>
  import("@/components/ui/cursor-trail").then((mod) => ({
    default: mod.CursorTrail,
  }))
);

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <LenisProvider>
        {/* Skip to content for accessibility */}
        <SkipLink />

        <main id="main-content">{children}</main>

        {/* Cursor trail (desktop only) */}
        <Suspense fallback={null}>
          <CursorTrail />
        </Suspense>

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "inherit",
            },
          }}
        />
      </LenisProvider>
    </ThemeProvider>
  );
}
