import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteCustomPlugin from './plugins/ViteCustomPlugin'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // command 环境变量
  console.log(command)
  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      }
    },
    plugins: [
      vue(),
      ViteCustomPlugin({ des: '处理文件' }),
      viteMockServe()
    ],
  }
})
