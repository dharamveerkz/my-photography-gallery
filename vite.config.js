import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

const uploadList = readdirSync(resolve(rootDir, 'public/uploads'))
  .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
  .sort((a, b) => {
    const na = parseInt(a.match(/\d+/)?.[0] ?? '0', 10)
    const nb = parseInt(b.match(/\d+/)?.[0] ?? '0', 10)
    return na - nb
  })

export default defineConfig({
  plugins: [react()],
  define: {
    __UPLOAD_LIST__: JSON.stringify(uploadList),
  },
})
