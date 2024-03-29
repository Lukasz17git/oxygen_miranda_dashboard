
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), svgr({
      svgrOptions: {
         typescript: true,
         prettier: false,
         jsxRuntime: 'automatic'
      },
      esbuildOptions: { loader: 'tsx' }
   }), viteCompression(), visualizer({ open: true, gzipSize: true, brotliSize: true })],
   build: {
      assetsInlineLimit: 0,
      outDir: './dist',
   },
   test: {
      environment: 'jsdom',
      setupFiles: ['./Tests/setup.ts'],
      globals: true,
   }
})
