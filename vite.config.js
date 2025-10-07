import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'],
      },
      includeAssets: [
        'favicon.png',
        'apple-touch-icon.png',
        'mask-icon.png'
      ],
      manifest: {
        name: 'سنجاب | سامانه اعتبار خرید',
        short_name: 'سنجاب',
        theme_color: '#ffffff',
        display_override: ["fullscreen", "minimal-ui"],
        display: "standalone",
        start_url: "/",
        scope: ".",
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: 'screenshot1.png',
            sizes: '750x1334',
            type: 'image/png',
          },
          {
            src: 'screenshot2.png',
            sizes: '1920x1080',
            type: 'image/png',
          },
        ],
      }
    })
  ],
})
