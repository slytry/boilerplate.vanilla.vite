import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`,
            },
        },
    },
});
