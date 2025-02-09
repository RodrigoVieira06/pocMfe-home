// home-app/vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";


export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      federation({
        name: "homeApp",
        filename: "remoteEntry.js",
        exposes: {
          "./HomePage": "./src/HomePage"
        },
        remotes: {
          // dashboardApp está sendo consumido pelo home-app (no DashboardLoader)
          dashboardApp: env.VITE_REMOTE_DASHBOARD
        },
        shared: ["react", "react-dom", "react-router-dom"]
      })
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false
    }
  }
});
