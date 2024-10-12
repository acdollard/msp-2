// astro.config.mjs
import { defineConfig } from "astro/config";
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanityIntegration({
      projectId: "tzo5r4as",
      dataset: "production",
      useCdn: false, // See note on using the CDN
      apiVersion: "2024-07-24", // insert the current date to access the latest version of the API
      studioBasePath: "/studio", // If you want to access the Studio on a route
    }),
    react(),
    vue(),
  ],
  output: "server",
});
