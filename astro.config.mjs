import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  site: 'https://exciteddao.github.io',
  base: '/website',
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
    astroI18next(),
  ],
});
