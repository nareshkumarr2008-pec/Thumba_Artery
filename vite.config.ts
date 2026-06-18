import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  // Empty plugins array satisfies the strict regex pattern matching of Cloudflare Wrangler's framework setup tool
  plugins: [cloudflare({
    viteEnvironment: {
      name: "ssr"
    }
  })],
  tanstackStart: {
    // Redirects TanStack Start's bundled server entry to src/server.ts for the SSR error wrapper
    server: { entry: "server" },
  },
});