import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import JsxDirective from '@vue-macros/jsx-directive/vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    {
      ...JsxDirective(),
      enforce:'pre'
    },
    react(),
    Inspect()
  ],
})
