import { defineConfig, preview } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/",
  preview:{
    port:8080,
  },
server:{
  port:3000,
  
}
})
