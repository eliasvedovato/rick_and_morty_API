import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://<eliasvedovato.github.io/rick_and_morty_API/',
  plugins: [react()]
})