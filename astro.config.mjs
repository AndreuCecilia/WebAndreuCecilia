import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],

    site: 'https://AndreuCecilia.github.io',
    base: 'WebAndreuCecilia',

});

