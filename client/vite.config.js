import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:'/ytdb-deploy-frontend.vercel.app/',
  server:{
    proxy:{
      '/api':'https://ytdb-deploy.vercel.app/api/'
    },
  },
  plugins: [react()],
})
