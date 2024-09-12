import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslint from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true, // Chỉ cảnh báo, không ngăn chặn chương trình chạy
      emitError: false, // Không phát lỗi nghiêm trọng để chặn chương trình
      failOnWarning: false, // Không dừng lại khi có cảnh báo
      failOnError: true, // Không dừng lại khi có lỗi
    }),
  ],
})
