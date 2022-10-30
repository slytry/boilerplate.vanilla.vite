import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import zipPack from 'vite-plugin-zip-pack';
import { createHtmlPlugin } from 'vite-plugin-html';
import { path, root, outDir } from './viteConfig/config';

export default defineConfig({
	root,
	resolve: {
		alias: {
			'@pages/*': ['pages/*'],
			'@style/*': ['style/*'],
			'@images/*': ['images/*'],
		},
	},
	build: {
		outDir,
		emptyOutDir: true,
		// rollupOptions: {
		// 	input: {
		// 		main: resolve(root, 'index.html'),
		// 		analisys: resolve(root, 'pages', 'analisys', 'index.html'),
		// 		dent: resolve(root, 'pages', 'dent', 'index.html'),
		// 		med: resolve(root, 'pages', 'med', 'index.html'),
		// 		services: resolve(root, 'pages', 'services', 'index.html'),
		// 		service: resolve(root, 'pages', 'service', 'index.html'),
		// 		reception: resolve(root, 'pages', 'reception', 'index.html'),
		// 	},
		// },
	},
	plugins: [
		zipPack(),
		createHtmlPlugin({
			minify: false,
			pages: [
				{
					entry: resolve(path.home, 'index.js'),
					filename: 'index.html',
				},
				{
					entry: resolve(path.anal, 'index.js'),
					filename: 'index.html',
				},
			],
		}),
		// viteImagemin({
		// 	gifsicle: {
		// 		optimizationLevel: 7,
		// 		interlaced: false,
		// 	},
		// 	optipng: {
		// 		optimizationLevel: 7,
		// 	},
		// 	mozjpeg: {
		// 		quality: 20,
		// 	},
		// 	pngquant: {
		// 		quality: [0.8, 0.9],
		// 		speed: 4,
		// 	},
		// 	svgo: {
		// 		plugins: [
		// 			{
		// 				name: 'removeViewBox',
		// 			},
		// 			{
		// 				name: 'removeEmptyAttrs',
		// 				active: false,
		// 			},
		// 		],
		// 	},
		// }),
	],
});
