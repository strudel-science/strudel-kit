import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [TanStackRouterVite({ autoCodeSplitting: true }), react()],
    base: env.VITE_BASE_URL,
    server: {
      port: 5175,
      strictPort: true,
    },
  };
});
