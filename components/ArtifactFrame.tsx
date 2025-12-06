"use client";

import { motion } from "framer-motion";
import { Artifact } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface ArtifactFrameProps {
  artifact: Artifact;
  onClick: () => void;
  index: number;
}

export default function ArtifactFrame({ artifact, onClick, index }: ArtifactFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        rotateX: -5,
        transition: { duration: 0.3 },
      }}
      className="relative group cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onClick={onClick}
    >
      {/* Frame border with glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-prophet-gold via-prophet-gold-600 to-prophet-gold rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500 animate-glow"></div>
      
      {/* Main frame */}
      <div className="relative bg-void-black-900 border-2 border-prophet-gold rounded-lg overflow-hidden">
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={artifact.image}
            alt={artifact.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Glitch overlay on hover */}
          <div className="absolute inset-0 bg-prophet-gold opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity duration-300 pointer-events-none animate-glitch"></div>
          
          {/* Minted badge */}
          {artifact.minted && (
            <div className="absolute top-4 right-4 bg-prophet-gold text-void-black-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Minted
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-3">
          <p className="text-prophet-gold-400 text-sm font-mono uppercase tracking-wider">
            {formatDate(new Date(artifact.date))}
          </p>
          
          <h3 className="text-prophet-gold font-display font-bold text-xl leading-tight group-hover:text-glow transition-all duration-300">
            {artifact.title}
          </h3>
          
          <p className="text-prophet-gold-200 text-sm line-clamp-2 leading-relaxed">
            {artifact.excerpt}
          </p>
          
          {/* View indicator */}
          <div className="flex items-center gap-2 text-prophet-gold-400 text-xs font-mono uppercase tracking-wider pt-2">
            <span>View Prophecy</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-prophet-gold rounded-full"
            initial={{ x: "50%", y: "50%", opacity: 0 }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
