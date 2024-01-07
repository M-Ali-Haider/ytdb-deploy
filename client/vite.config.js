import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
    proxy:{
      '/api':'https://ytdb-deploy.vercel.app/api/'
    },
  },
  plugins: [react()],
})
