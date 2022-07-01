import { defineConfig } from "astro/config";

// https://astro.build/config
export default {
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
};
