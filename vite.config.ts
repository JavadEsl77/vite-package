import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from 'path';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "ViteComponent",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
