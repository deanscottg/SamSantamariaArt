export interface Painting {
  dimensions: Dimension[];
  image: Image;
  name: string;
}

export interface Dimension {
  depth: number;
  height: number;
  width: number;
}

export interface Image {
  asset: Asset;
}

export interface Asset {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  assetId: string;
  extension: string;
  metadata: Metadata;
  mimeType: string;
  originalFilename: string;
  path: string;
  sha1hash: string;
  size: number;
  uploadId: string;
  url: string;
}

export interface Metadata {
  _type: string;
  blurHash: string;
  dimensions: Dimensions;
  hasAlpha: boolean;
  isOpaque: boolean;
  lqip: string;
  palette: Palette;
}

export interface Dimensions {
  _type: string;
  aspectRatio: number;
  height: number;
  width: number;
}

export interface Palette {
  _type: string;
  darkMuted: DarkMuted;
  darkVibrant: DarkVibrant;
  dominant: Dominant;
  lightMuted: LightMuted;
  lightVibrant: LightVibrant;
  muted: Muted;
  vibrant: Vibrant;
}

export interface DarkMuted {
  _type: string;
  background: string;
  foreground: string;
  population: number;
  title: string;
}

export interface DarkVibrant {
  _type: string;
  background: string;
  foreground: string;
  population: number;
  title: string;
}

export interface Dominant {
  _type: string;
  background: string;
  foreground: string;
  population: number;
  title: string;
}

export interface LightMuted {
  _type: string;
  background: string;
  foreground: string;
  population: number;
  title: string;
}

export interface LightVibrant {
  _type: string;
  background: string;
  foreground: string;
  population: number;
  title: string;
}

export interface Muted {
  _type: string;
  background: string;
  foreground: string;
  population: number;
  title: string;
}

export interface Vibrant {
  _type: string;
  background: string;
  foreground: string;
  population: number;
  title: string;
}

export interface Series {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
  name: string;
  paintings: Painting[];
}
