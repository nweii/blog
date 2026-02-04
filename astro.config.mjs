// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import remarkDirective from "remark-directive";
import remarkQuoteback from "./src/plugins/remark-quoteback.mjs";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkDirective, remarkQuoteback],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
  redirects: {
    "/2022/08/a-love-letter-to-wikipedia": "/posts/a-love-letter-to-wikipedia",
    "/2022/09/the-dynamic-island-and-ar": "/posts/dynamic-island-ar",
    "/2022/08/real-engagement-optimizing-for-feelings": "/posts/optimizing-for-feelings-and-revelation",
    "/2022/08/ideology-the-social-web": "/posts/ideology-and-the-social-web",
  },
});
