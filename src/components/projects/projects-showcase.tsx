"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkles, ArrowRight, Filter, X, Brain, Cpu, Zap } from "lucide-react";
import { ProjectCard } from "@/components/project";
import { projects, getAllCategories } from "@/data/projects";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

// Stats component
function StatsBar() {
  const stats = [
    { icon: Brain, label: "AI Projects", value: "24" },
    { icon: Cpu, label: "Technologies", value: "50+" },
    { icon: Zap, label: "Impact Delivered", value: "$10M+" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mb-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
    >
      {stats.map(({ icon: Icon, label, value }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md sm:px-5"
        >
          <Icon className="h-5 w-5 text-purple-400" />
          <div>
            <div className="text-lg font-bold text-white sm:text-xl">{value}</div>
            <div className="text-xs text-white/50">{label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Category filter chips
function CategoryFilters({
  categories,
  activeFilter,
  onFilterChange,
}: {
  categories: string[];
  activeFilter: string | null;
  onFilterChange: (category: string | null) => void;
}) {
  return (
    <div className="mb-8">
      <div className="scrollbar-hide -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
        <div className="flex min-w-max gap-2 pb-2 sm:flex-wrap sm:justify-center sm:gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange(null)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              "border backdrop-blur-sm",
              !activeFilter
                ? "border-purple-500/50 bg-purple-500/20 text-purple-300"
                : "border-white/10 bg-black/30 text-white/60 hover:border-white/20 hover:text-white/80"
            )}
          >
            All Projects
          </motion.button>
          {categories.slice(0, 8).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange(category)}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all",
                "border backdrop-blur-sm",
                activeFilter === category
                  ? "border-purple-500/50 bg-purple-500/20 text-purple-300"
                  : "border-white/10 bg-black/30 text-white/60 hover:border-white/20 hover:text-white/80"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Active filter indicator */}
      {activeFilter && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex justify-center"
        >
          <button
            onClick={() => onFilterChange(null)}
            className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-sm text-purple-300 transition-colors hover:bg-purple-500/20"
          >
            <Filter className="h-3 w-3" />
            {activeFilter}
            <X className="h-3 w-3" />
          </button>
        </motion.div>
      )}
    </div>
  );
}

export function ProjectsShowcase() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(() => getAllCategories(), []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (!activeFilter) return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  // Limit display unless "show all" is clicked
  const displayedProjects = useMemo(() => {
    if (showAll) return filteredProjects;
    return filteredProjects.slice(0, 12);
  }, [filteredProjects, showAll]);

  // Featured projects (first 3)
  const featuredProjects = useMemo(() => {
    return filteredProjects.slice(0, 3);
  }, [filteredProjects]);

  // Rest of projects
  const restProjects = useMemo(() => {
    if (showAll) return filteredProjects.slice(3);
    return filteredProjects.slice(3, 12);
  }, [filteredProjects, showAll]);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative min-h-screen overflow-hidden bg-slate-950 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
            </span>
            <span className="text-sm font-medium text-purple-300">
              Case Studies
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Selected Works
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl text-white/50"
          >
            <span className="font-semibold text-white/70">24</span> production AI
            & full-stack projects delivering{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold text-transparent">
              measurable business impact
            </span>
          </motion.p>
        </motion.div>

        {/* Stats */}
        <StatsBar />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <CategoryFilters
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </motion.div>

        {/* Featured Projects (Larger Cards) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`featured-${activeFilter || "all"}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="mb-6 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                variants={itemVariants}
                className={cn(index === 0 && "md:col-span-2 lg:col-span-1")}
              >
                <ProjectCard
                  project={project}
                  variant="featured"
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Rest of Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`grid-${activeFilter || "all"}-${showAll}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
          >
            {restProjects.map((project, index) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <ProjectCard
                  project={project}
                  variant="list"
                  index={index + 3}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="mb-4 text-6xl">🔍</div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              No projects found
            </h3>
            <p className="text-white/50">
              Try selecting a different category
            </p>
          </motion.div>
        )}

        {/* Show More / View All */}
        {filteredProjects.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {!showAll ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(true)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-8 py-3",
                  "bg-gradient-to-r from-purple-600 to-cyan-600",
                  "font-medium text-white",
                  "shadow-lg shadow-purple-500/25",
                  "transition-all hover:shadow-xl hover:shadow-purple-500/30"
                )}
              >
                Show All {filteredProjects.length} Projects
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
                  +{filteredProjects.length - 12}
                </span>
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(false)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/80 transition-colors hover:bg-white/10"
              >
                Show Less
              </motion.button>
            )}

            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/80 transition-colors hover:bg-white/10"
            >
              View Full Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}

        {/* CTA for smaller result sets */}
        {filteredProjects.length <= 12 && filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/projects"
              className={cn(
                "flex items-center gap-2 rounded-full px-8 py-3",
                "bg-gradient-to-r from-purple-600 to-cyan-600",
                "font-medium text-white",
                "shadow-lg shadow-purple-500/25",
                "transition-all hover:shadow-xl hover:shadow-purple-500/30"
              )}
            >
              Explore All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
