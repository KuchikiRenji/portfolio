"use client";

import { motion } from "framer-motion";
import { Heart, Code2, Coffee } from "lucide-react";
import { SocialIconsFooter } from "./social-links";
import { GradientText } from "@/components/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-slate-950">
      {/* Gradient line at top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="mb-2 text-2xl font-bold">
              <GradientText>KR</GradientText>
            </div>
            <p className="text-sm text-white/40">Building the future with AI</p>
          </motion.div>

          {/* Center - Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <SocialIconsFooter />
          </motion.div>

          {/* Right - Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="flex items-center justify-center gap-1 text-sm text-white/40 md:justify-end">
              Made with{" "}
              <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> and{" "}
              <Coffee className="h-4 w-4 text-amber-500" />
            </p>
            <p className="mt-1 text-sm text-white/40">
              © {currentYear} Kuchiki Renji
            </p>
          </motion.div>
        </div>

        {/* Bottom row - Tech stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 border-t border-white/5 pt-8 text-center"
        >
          <p className="flex flex-wrap items-center justify-center gap-1 text-sm text-white/30">
            <Code2 className="h-4 w-4" />
            Built with <span className="text-white/50">Next.js 16</span> •{" "}
            <span className="text-white/50">Three.js</span> •{" "}
            <span className="text-white/50">Framer Motion</span> •{" "}
            <span className="text-white/50">Tailwind CSS</span>
          </p>
          <p className="mt-2 text-xs text-white/20">
            Deployed on Vercel • Source on GitHub
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
