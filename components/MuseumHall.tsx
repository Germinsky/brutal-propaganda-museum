"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ArtifactFrame from "./ArtifactFrame";
import ProphetModal from "./ProphetModal";
import { Artifact } from "@/lib/types";
import { getArtifacts } from "@/lib/artifacts";

export default function MuseumHall() {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const artifacts = getArtifacts();

  const handleArtifactClick = (artifact: Artifact) => {
    setSelectedArtifact(artifact);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArtifact(null), 300);
  };

  return (
    <>
      <div className="min-h-screen bg-void-black-950 relative">
        {/* Grain texture */}
        <div className="grain"></div>

        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-32 pb-20 px-6"
        >
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-prophet-gold font-display font-bold text-6xl md:text-8xl leading-tight text-glow"
            >
              BRUTAL PROPAGANDA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-prophet-gold-200 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              A cyberpunk cathedral of daily prophetic memes. AI-generated
              apocalyptic news art, minted fresh every morning at 06:00 UTC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-4 text-prophet-gold-400 text-sm font-mono uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-prophet-gold rounded-full animate-pulse"></div>
                <span>Live on Base</span>
              </div>
              <span>•</span>
              <span>0.08 ETH Floor</span>
              <span>•</span>
              <span>10% Royalty</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Gallery grid */}
        <section className="relative pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artifacts.map((artifact, index) => (
                <ArtifactFrame
                  key={artifact.id}
                  artifact={artifact}
                  onClick={() => handleArtifactClick(artifact)}
                  index={index}
                />
              ))}
            </div>

            {/* Load more indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 border-2 border-prophet-gold/30 rounded-full text-prophet-gold-400 font-mono text-sm uppercase tracking-wider">
                <div className="w-2 h-2 bg-prophet-gold-400 rounded-full animate-pulse"></div>
                <span>New prophecy arrives at dawn</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Floating particles background effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-prophet-gold rounded-full opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -100, window.innerHeight + 100],
                x: [
                  null,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProphetModal
        artifact={selectedArtifact}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
