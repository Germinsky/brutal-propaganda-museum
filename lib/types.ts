export interface Artifact {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  ipfsImage?: string;
  nftContract?: string;
  tokenId?: string;
  openseaUrl?: string;
  minted: boolean;
}

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}
