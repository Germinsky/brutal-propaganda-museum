import { Artifact } from "./types";
import { formatDate } from "./utils";

// Mock data for development - replace with database in production
export const mockArtifacts: Artifact[] = [
  {
    id: 1,
    date: new Date().toISOString(),
    title: "BRUTAL PROPAGANDA #001 – The Digital Apocalypse",
    excerpt: "The machines are talking, and they're not happy. A cyberpunk prophecy emerges from the digital void.",
    content: `<p>In the cathedral of silicon dreams, where code becomes prophecy and data flows like digital blood, we bear witness to the brutal truth: the apocalypse isn't coming—it's already here, streaming in real-time, minted as NFTs, and selling for 0.08 ETH.</p>

<p>The prophets of old spoke in tongues of fire. We speak in React components and Solidity contracts. Same energy, different substrate.</p>

<p>This is not your grandfather's doom-scrolling. This is weaponized art, blockchain-verified truth bombs, immersive apocalyptic experiences that will make you feel the heat death of consensus reality in 8K resolution.</p>

<p>Welcome to the museum. Mint the end times. Hodl the void.</p>`,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    minted: false,
  },
  {
    id: 2,
    date: new Date(Date.now() - 86400000).toISOString(),
    title: "BRUTAL PROPAGANDA #002 – Consensus Collapse",
    excerpt: "Reality is a distributed ledger and someone just performed a 51% attack on your perception.",
    content: `<p>The consensus mechanism is breaking. Not in crypto—though that too—but in the very fabric of shared reality. We've moved from "my truth" to "there is no truth" to "truth is an NFT and I just right-clicked it."</p>

<p>Every headline is a fork. Every narrative a competing chain. The validators are all bots. The nodes are all vibes.</p>

<p>In this museum of digital prophecy, we collect the shards of consensus as they shatter in real-time. Each artifact a snapshot of the moment truth became plural, reality became optional, and art became the only honest witness.</p>

<p>This isn't collapse. This is emergence. Evolution through digital fire.</p>`,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    minted: true,
    nftContract: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    tokenId: "1",
    openseaUrl: "https://opensea.io/assets/base/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb/1",
  },
  {
    id: 3,
    date: new Date(Date.now() - 172800000).toISOString(),
    title: "BRUTAL PROPAGANDA #003 – The Prophetic Stack",
    excerpt: "Next.js 15, Three.js, and the tears of fallen developers: our tech stack is also our aesthetic.",
    content: `<p>They asked for a museum. We gave them a cathedral. They wanted NFTs. We gave them prophetic artifacts blessed by AI and forged in the fires of Base chain.</p>

<p>The stack is sacred: Next.js for the structure, Three.js for the transcendence, Framer Motion for the holy animations, and RainbowKit for the conversion experience (connect your wallet, confess your sins).</p>

<p>Every line of code is a prayer. Every component a psalm. The linter is our conscience, TypeScript our moral framework, and the build errors are just tests of faith.</p>

<p>We don't ship bugs. We ship features the universe isn't ready for yet.</p>`,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    minted: true,
    nftContract: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    tokenId: "2",
    openseaUrl: "https://opensea.io/assets/base/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb/2",
  },
];

export function getArtifacts(): Artifact[] {
  return mockArtifacts;
}

export function getArtifactById(id: number): Artifact | undefined {
  return mockArtifacts.find((artifact) => artifact.id === id);
}

export function getLatestArtifact(): Artifact {
  return mockArtifacts[0];
}
