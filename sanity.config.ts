import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const config = defineConfig({
  projectId: '0cvn7b0x',
  dataset: 'production',
  title: 'Portfolio Builder',
  apiVersion: '2024-05-14',
  basePath: '/admin',
  plugins: [structureTool],
});

export default config;
