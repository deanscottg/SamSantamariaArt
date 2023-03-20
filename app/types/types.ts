import { z } from "zod";
import {
  assetSchema,
  darkMutedSchema,
  darkVibrantSchema,
  dimensionSchema,
  dimensionsSchema,
  dominantSchema,
  imageSchema,
  lightMutedSchema,
  lightVibrantSchema,
  mergedSeriesSchema,
  metadataSchema,
  mutedSchema,
  paintingSchema,
  paletteSchema,
  photoSchema,
  seriesSchema,
  vibrantSchema,
} from "./zodSchemas";

export type Dimension = z.infer<typeof dimensionSchema>;
export type Dimensions = z.infer<typeof dimensionsSchema>;
export type DarkMuted = z.infer<typeof darkMutedSchema>;
export type DarkVibrant = z.infer<typeof darkVibrantSchema>;
export type Dominant = z.infer<typeof dominantSchema>;
export type LightMuted = z.infer<typeof lightMutedSchema>;
export type LightVibrant = z.infer<typeof lightVibrantSchema>;
export type MutedSchema = z.infer<typeof mutedSchema>;
export type Vibrant = z.infer<typeof vibrantSchema>;
export type Palette = z.infer<typeof paletteSchema>;
export type MetadataSchema = z.infer<typeof metadataSchema>;
export type Asset = z.infer<typeof assetSchema>;
export type Image = z.infer<typeof imageSchema>;
export type Painting = z.infer<typeof paintingSchema>;
export type Series = z.infer<typeof seriesSchema>;
export type Photo = z.infer<typeof photoSchema>;
export type MergedSeries = z.infer<typeof mergedSeriesSchema>;
