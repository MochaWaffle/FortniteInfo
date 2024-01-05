import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
        manifest: {
          name: "FortniteInfo",
          short_name: "FortniteInfo",
          display: "standalone",
          background_color: "#086BBE",
          theme_color: "#086BBE",
          orientation: "portrait",
          description: "FortniteInfo shows Fortnite's current map, news, and shop items and checks the validity of a creator code.",

          icons: [
            {
              src: "/icons/manifest-icon-144.png",
              sizes: "144x144",
              type: "image/png",
              purpose: "any"
            },
            {
              src: "/icons/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any"
            },
            {
              src: "/icons/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable"
            },
            {
              src: "/icons/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any"
            },
            {
              src: "/icons/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable"
            }
          ]
        },
        workbox: {
          runtimeCaching: [{
            urlPattern: ({ url }) => {
              console.log("Href: " + url.href)
              return url.href.includes("fortnite-api.com");
            },
            handler: "CacheFirst",
            options: {
              cacheName: "api-cache",
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }]
        }
    })
  ],
})
