import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages: Update base to '/YOUR_REPO_NAME/' if deploying to GitHub Pages
// For Vercel/Netlify: Keep base as '/'
export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/YOUR_REPO_NAME/' for GitHub Pages
  build: {
    outDir: 'dist',
  },
})
