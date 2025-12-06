"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Artifact } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import MintButton from "./MintButton";
import { useEffect } from "react";

interface ProphetModalProps {
  artifact: Artifact | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProphetModal({ artifact, isOpen, onClose }: ProphetModalProps) {
  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!artifact) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-void-black-950/95 z-50 backdrop-blur-sm"
            onClick={onClose}
          >
            <div className="grain"></div>
          </motion.div>

          {/* Modal content */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 py-12 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotateX: -10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateX: 10 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full max-w-5xl bg-void-black-900 border-2 border-prophet-gold rounded-xl overflow-hidden shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-prophet-gold via-prophet-gold-600 to-prophet-gold rounded-xl blur-xl opacity-50 animate-glow"></div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 bg-void-black-900/80 backdrop-blur-sm text-prophet-gold hover:text-prophet-gold-300 p-2 rounded-full transition-colors duration-300 border border-prophet-gold/30 hover:border-prophet-gold group"
                >
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                <div className="relative">
                  {/* Hero image */}
                  <div className="relative w-full aspect-[21/9] overflow-hidden">
                    <Image
                      src={artifact.image}
                      alt={artifact.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void-black-900"></div>
                  </div>

                  {/* Content */}
                  <div className="relative px-8 pb-8 -mt-24 z-10">
                    <div className="max-w-3xl mx-auto space-y-6">
                      {/* Date */}
                      <p className="text-prophet-gold-400 text-sm font-mono uppercase tracking-wider">
                        {formatDate(new Date(artifact.date))}
                      </p>

                      {/* Title */}
                      <h1 className="text-prophet-gold font-display font-bold text-4xl md:text-5xl leading-tight text-glow">
                        {artifact.title}
                      </h1>

                      {/* Excerpt */}
                      <p className="text-prophet-gold-200 text-xl leading-relaxed">
                        {artifact.excerpt}
                      </p>

                      {/* Divider */}
                      <div className="border-t border-prophet-gold/30 my-8"></div>

                      {/* Article content */}
                      <div
                        className="prose prose-invert prose-prophet max-w-none
                          prose-p:text-prophet-gold-100 prose-p:leading-relaxed prose-p:text-lg
                          prose-headings:text-prophet-gold prose-headings:font-display
                          prose-strong:text-prophet-gold prose-strong:font-bold
                          prose-a:text-prophet-gold-400 prose-a:underline hover:prose-a:text-prophet-gold
                        "
                        dangerouslySetInnerHTML={{ __html: artifact.content }}
                      />

                      {/* Divider */}
                      <div className="border-t border-prophet-gold/30 my-8"></div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Mint button */}
                        <MintButton artifact={artifact} />

                        {/* OpenSea link if minted */}
                        {artifact.minted && artifact.openseaUrl && (
                          <a
                            href={artifact.openseaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-prophet-gold-400 hover:text-prophet-gold transition-colors duration-300 font-mono text-sm uppercase tracking-wider group"
                          >
                            <span>View on OpenSea</span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
