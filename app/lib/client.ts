import { createClient as createNextSanityClient } from "next-sanity";
import { createClient as createSanityClient } from "@sanity/client";

const projectInfo = {
  projectId: "2b9gf9cl",
  dataset: "production",
  apiVersion: "2023-03-11",
};

export const nextSanityClient = createNextSanityClient({
  ...projectInfo,
  useCdn: true,
});
export const sClient = createSanityClient({
  ...projectInfo,
  useCdn: true,
});
