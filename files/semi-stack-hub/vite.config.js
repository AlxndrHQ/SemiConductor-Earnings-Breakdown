import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: set `base` to '/<repo-name>/' for GitHub Pages project sites.
// If deploying to a user/org root site (username.github.io), use '/'.
export default defineConfig({
  plugins: [react()],
  base: '/semi-stack-hub/',
});
