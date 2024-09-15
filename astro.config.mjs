import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://basebyte.com.br",
  integrations: [
    robotsTxt(),
    sitemap(),
    compress(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
