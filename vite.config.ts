import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
        usePolling: true
    }
  },
  plugins: [react()],
  base: "/B-a-r-r.github.io",
})

  