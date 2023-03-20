import { z } from "zod";

export const dimensionSchema = z.object({
  depth: z.number(),
  height: z.number(),
  width: z.number(),
});

export const dimensionsSchema = z.object({
  _type: z.string(),
  aspectRatio: z.number(),
  height: z.number(),
  width: z.number(),
});

export const darkMutedSchema = z.object({
  _type: z.string(),
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string(),
});

export const darkVibrantSchema = z.object({
  _type: z.string(),
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string(),
});

export const dominantSchema = z.object({
  _type: z.string(),
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string(),
});

export const lightMutedSchema = z.object({
  _type: z.string(),
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string(),
});

export const lightVibrantSchema = z.object({
  _type: z.string(),
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string(),
});

export const mutedSchema = z.object({
  _type: z.string(),
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string(),
});

export const vibrantSchema = z.object({
  _type: z.string(),
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string(),
});

export const paletteSchema = z.object({
  _type: z.string(),
  darkMuted: darkMutedSchema,
  darkVibrant: darkVibrantSchema,
  dominant: dominantSchema,
  lightMuted: lightMutedSchema,
  lightVibrant: lightVibrantSchema,
  muted: mutedSchema,
  vibrant: vibrantSchema,
});

export const metadataSchema = z.object({
  _type: z.string(),
  blurHash: z.string(),
  dimensions: dimensionsSchema,
  hasAlpha: z.boolean(),
  isOpaque: z.boolean(),
  lqip: z.string(),
  palette: paletteSchema,
});

export const assetSchema = z.object({
  _createdAt: z.string(),
  _id: z.string(),
  _rev: z.string(),
  _type: z.string(),
  _updatedAt: z.string(),
  assetId: z.string(),
  extension: z.string(),
  metadata: metadataSchema,
  mimeType: z.string(),
  originalFilename: z.string(),
  path: z.string(),
  sha1hash: z.string(),
  size: z.number(),
  uploadId: z.string(),
  url: z.string(),
});

export const imageSchema = z.object({
  asset: assetSchema,
});

export const paintingSchema = z.object({
  _id: z.string(),
  dimensions: z.array(dimensionSchema),
  image: imageSchema,
  name: z.string(),
});

export const seriesSchema = z.object({
  _createdAt: z.string(),
  _id: z.string(),
  _rev: z.string(),
  _type: z.string(),
  _updatedAt: z.string(),
  name: z.string(),
  paintings: z.array(paintingSchema),
});

export const photoSchema = z.object({
  _createdAt: z.string(),
  _rev: z.string(),
  _type: z.string(),
  _updatedAt: z.string(),
  _id: z.string(),
  name: z.string(),
  dimensions: dimensionSchema,
  image: imageSchema,
});
