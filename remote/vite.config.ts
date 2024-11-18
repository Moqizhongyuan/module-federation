import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.js",
        "./App": "./src/App.vue",
        "./utils": "./src/utils.ts",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
});
