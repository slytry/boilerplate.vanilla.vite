import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import zipPack from 'vite-plugin-zip-pack';

const publicDir = '../public';
const src = resolve(process.cwd(), 'src');
const outDir = resolve(process.cwd(), 'dist');
const _pages = resolve(src, 'pages');

export default defineConfig({
	root: src,
	publicDir,
	preview: {
		open: true,
	},
	server: {
		open: true,
	},
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(src, 'index.html'),
				secondPage: resolve(_pages, 'second-page', 'second-page.html'),
			},
		},
	},
	plugins: [
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 80,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
		}),
		zipPack(),
	],
});
