"use client";

import { useState } from "react";
import { Artifact } from "@/lib/types";
import confetti from "canvas-confetti";
import { Loader2 } from "lucide-react";

interface MintButtonProps {
  artifact: Artifact;
}

export default function MintButton({ artifact }: MintButtonProps) {
  const [isMinting, setIsMinting] = useState(false);
  const [mintSuccess, setMintSuccess] = useState(false);

  const handleMint = async () => {
    if (artifact.minted) return;

    setIsMinting(true);

    try {
      // Simulate minting process
      // In production, integrate with Thirdweb SDK here
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setMintSuccess(true);

      // Confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFD700", "#FFA500", "#FF8C00"],
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#FFD700", "#FFA500", "#FF8C00"],
        });
      }, 250);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#FFD700", "#FFA500", "#FF8C00"],
        });
      }, 400);
    } catch (error) {
      console.error("Minting error:", error);
      alert("Minting failed. Please try again.");
    } finally {
      setIsMinting(false);
    }
  };

  if (artifact.minted) {
    return (
      <div className="flex items-center gap-3 px-6 py-3 bg-prophet-gold/10 border-2 border-prophet-gold/30 rounded-lg">
        <div className="w-3 h-3 bg-prophet-gold rounded-full animate-pulse"></div>
        <span className="text-prophet-gold font-mono text-sm uppercase tracking-wider">
          Already Minted
        </span>
      </div>
    );
  }

  if (mintSuccess) {
    return (
      <div className="flex items-center gap-3 px-6 py-3 bg-prophet-gold/20 border-2 border-prophet-gold rounded-lg">
        <div className="w-3 h-3 bg-prophet-gold rounded-full animate-pulse"></div>
        <span className="text-prophet-gold font-mono text-sm uppercase tracking-wider">
          Mint Successful! 🎉
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={handleMint}
      disabled={isMinting}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-prophet-gold via-prophet-gold-600 to-prophet-gold rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300 animate-glow"></div>

      {/* Button */}
      <div className="relative flex items-center gap-3 px-8 py-4 bg-prophet-gold text-void-black-950 rounded-lg font-display font-bold text-lg uppercase tracking-wider transition-all duration-300 group-hover:bg-prophet-gold-400 group-hover:scale-105">
        {isMinting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Minting...</span>
          </>
        ) : (
          <>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>Mint NFT – 0.08 ETH</span>
          </>
        )}
      </div>
    </button>
  );
}
