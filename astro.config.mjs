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
  redirects: {
    '/qr/esh': {
      destination: 'https://cashbarber.com.br/esdrassilvahair',
      status: 302,
    },
    '/qr/falajandirense': {
      destination: 'https://forms.gle/nR6M4wvPZRk9kvhf6',
      status: 302,
    },
  },
});
