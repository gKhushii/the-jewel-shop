// src/sanityClient.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "jptdzbel",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true
});
