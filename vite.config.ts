import { defineConfig } from 'vite'
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mdPlugin({mode: [Mode.HTML]})],
  base: "/site/",
})

