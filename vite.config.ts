import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { config } from 'dotenv';

config();

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: parseInt(process.env.PORT || '3000'), host: '0.0.0.0' },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
