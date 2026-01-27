"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Lightbulb,
  Wrench,
  ChevronRight,
} from "lucide-react";
import { ProjectGallery, ProjectTechStack } from "@/components/project";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectDetailClientProps {
  project: Project;
}

const pageVariants = {
  initial: { opacity: 0, scale: 0.98, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-slate-950"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden sm:h-[70vh]">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <Image
            src={project.defaultImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col justify-end"
        >
          <div className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6 sm:pb-16">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-black/50"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 flex flex-wrap gap-2"
            >
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300 backdrop-blur-sm"
                >
                  {category}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {project.title}
            </motion.h1>

            {/* Impact Metric */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-bold sm:text-2xl md:text-3xl"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {project.impact}
              </span>
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative -mt-8 sm:-mt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Main Content Card */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl sm:p-8 md:p-10"
          >
            {/* Description */}
            <motion.div variants={fadeInUp} className="mb-10">
              <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
                {project.description}
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={fadeInUp} className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <Sparkles className="h-5 w-5 text-purple-400" />
                Tech Stack
              </h2>
              <ProjectTechStack tech={project.techStack} variant="pills" />
            </motion.div>

            {/* Technical Highlights */}
            <motion.div variants={fadeInUp} className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <Lightbulb className="h-5 w-5 text-cyan-400" />
                Technical Highlights
              </h2>
              <ul className="space-y-3">
                {project.technicalHighlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-400" />
                    <span className="text-white/70">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div variants={fadeInUp} className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <Wrench className="h-5 w-5 text-orange-400" />
                Challenges & Solutions
              </h2>
              <ul className="space-y-4">
                {project.challengesSolutions.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl border border-white/5 bg-white/5 p-4"
                  >
                    <span className="text-white/70">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <motion.div variants={fadeInUp} className="mb-10">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  Gallery
                </h2>
                <ProjectGallery images={project.gallery} alt={project.title} />
              </motion.div>
            )}

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <motion.div variants={fadeInUp}>
                <h2 className="mb-4 text-lg font-semibold text-white">
                  Links
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-5 py-2.5",
                        "border border-white/10 bg-white/5",
                        "text-sm font-medium text-white/80",
                        "transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {link.label}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center justify-center gap-4 pb-16 sm:flex-row"
          >
            <Link
              href="/projects"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-8 py-3",
                "bg-gradient-to-r from-purple-600 to-cyan-600",
                "font-medium text-white",
                "shadow-lg shadow-purple-500/25",
                "transition-all hover:shadow-xl hover:shadow-purple-500/30"
              )}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Projects
            </Link>
            <Link
              href="/#contact"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-8 py-3",
                "border border-white/10 bg-white/5",
                "font-medium text-white/80",
                "transition-all hover:border-white/20 hover:bg-white/10"
              )}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
