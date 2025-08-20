import { defineConfig } from '@solidjs/start/config';

export default defineConfig({
  ssr: false,
  server: {
    preset: 'static',
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/'
  }
});
