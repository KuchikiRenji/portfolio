"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const floatVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

interface HeroContentProps {
  onScrollToProjects: () => void;
  onContact: () => void;
}

export function HeroContent({
  onScrollToProjects,
  onContact,
}: HeroContentProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl text-center"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-white/80">
              Open to opportunities
            </span>
          </motion.div>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 font-display text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        >
          <span className="relative inline-block">
            <span
              className={cn(
                "bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400",
                "bg-clip-text text-transparent",
                "drop-shadow-[0_0_35px_rgba(139,92,246,0.5)]"
              )}
            >
              Kuchiki Renji
            </span>
            {/* Decorative sparkle */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -right-4 -top-4 sm:-right-8 sm:-top-8"
            >
              <Sparkles className="h-6 w-6 text-purple-400 sm:h-8 sm:w-8" />
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mb-6 text-lg font-medium text-white/60 sm:text-xl md:text-2xl"
        >
          <span className="text-white/90">AI Engineer</span>
          <span className="mx-3 text-purple-400/60">&</span>
          <span className="text-white/90">Full-Stack Developer</span>
          <span className="mx-3 hidden text-cyan-400/60 sm:inline">•</span>
          <span className="mt-2 block text-white/50 sm:mt-0 sm:inline">
            Fukuoka, Japan
          </span>
        </motion.p>

        {/* Tagline with metrics */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg md:text-xl">
            Building production AI that moves metrics —{" "}
            <span className="font-semibold text-emerald-400">
              +20% forecasting accuracy
            </span>
            ,{" "}
            <span className="font-semibold text-purple-400">
              +15% model performance
            </span>
            ,{" "}
            <span className="font-semibold text-cyan-400">
              +20% user engagement
            </span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <TiltCard glowColor="rgba(139, 92, 246, 0.4)">
            <motion.button
              onClick={onScrollToProjects}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative px-8 py-4 text-base font-semibold sm:text-lg",
                "bg-gradient-to-r from-purple-600 to-cyan-600",
                "text-white",
                "transition-all duration-300",
                "hover:from-purple-500 hover:to-cyan-500",
                "hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Explore Projects
              </span>
            </motion.button>
          </TiltCard>

          <TiltCard glowColor="rgba(6, 182, 212, 0.3)">
            <motion.button
              onClick={onContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "px-8 py-4 text-base font-semibold sm:text-lg",
                "bg-white/5",
                "text-white/90",
                "transition-all duration-300",
                "hover:bg-white/10",
                "hover:text-white"
              )}
            >
              <span className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Get in Touch
              </span>
            </motion.button>
          </TiltCard>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            "PyTorch",
            "LangChain",
            "Next.js",
            "TypeScript",
            "FastAPI",
            "PostgreSQL",
            "AWS",
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.05 }}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50 backdrop-blur-sm sm:text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-white/30">
            Scroll to explore
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-1 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
