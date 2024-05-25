import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://master--kreatif-software.netlify.app",
  integrations: [tailwind({ configFile: "./tailwind.config.mjs" })],
});
