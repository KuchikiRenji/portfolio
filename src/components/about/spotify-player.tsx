"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Play, Pause, ExternalLink } from "lucide-react";
import { currentlyListening } from "./about-data";
import { cn } from "@/lib/utils";

export function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "border border-white/10 bg-white/5 backdrop-blur-md",
        "p-4 transition-all hover:border-white/20 hover:bg-white/10"
      )}
    >
      {/* Spotify gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-50" />

      {/* Content */}
      <div className="relative flex items-center gap-4">
        {/* Album art placeholder */}
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-green-500/30 to-green-600/30">
          {/* Animated bars when playing */}
          {isPlaying && (
            <div className="absolute inset-0 flex items-end justify-center gap-0.5 p-2">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 rounded-full bg-green-400"
                  animate={{
                    height: ["30%", "80%", "50%", "90%", "30%"],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}
          <Music className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-green-400/50" />
        </div>

        {/* Track info */}
        <div className="min-w-0 flex-1">
          <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-green-400">
            Currently Listening
          </p>
          <p className="truncate text-sm font-semibold text-white">
            {currentlyListening.track}
          </p>
          <p className="truncate text-xs text-white/50">
            {currentlyListening.artist} • {currentlyListening.album}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-black transition-transform hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" fill="currentColor" />
            ) : (
              <Play className="h-4 w-4" fill="currentColor" />
            )}
          </button>
          <a
            href={currentlyListening.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative mt-3 h-1 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-green-500"
          initial={{ width: "30%" }}
          animate={isPlaying ? { width: ["30%", "100%"] } : {}}
          transition={{
            duration: 180,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}
