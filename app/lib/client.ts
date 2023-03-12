import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "2b9gf9cl",
  dataset: "production",
  apiVersion: "2023-03-11",
  useCdn: true,
});
