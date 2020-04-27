// import babel from 'rollup-plugin-babel'
// import { eslint } from 'rollup-plugin-eslint'
// import { terser } from 'rollup-plugin-terser'
// import pkg from './package.json'

// const year = (new Date()).getFullYear()
// const banner = `/* ${ pkg.title } v${ pkg.version } - ${ year } - Matteo Badini - MIT License */`
// const isDev = process.env.BUILD === 'development'

// let external = Object.keys(pkg.dependencies)
// let plugins = [eslint(), babel()]

// if (!isDev) {
// 	plugins.push(terser())
// }

// export default {
// 	input: 'src/vanilla-fade.js',
// 	output: [
// 		{
// 			banner: banner,
// 			file: pkg.main,
// 			format: 'iife',
// 			name: 'vanillaFade',
// 			sourcemap: true
// 		},
// 		{
// 			banner: banner,
// 			file: pkg.module,
// 			format: 'es',
// 			sourcemap: true
// 		},
// 	],
// 	plugins,
// 	external,
// }

import babel from 'rollup-plugin-babel'
import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const year = new Date().getFullYear();
const banner = `/* ${pkg.title} v${pkg.version} - ${year} - Matteo Badini - ISC License */`;
const isDev = process.env.BUILD === "development";

export default [
	{
		input: "src/index.js",
		output: {
			banner,
			file: pkg.browser,
			format: "iife",
			name: "vanillaFade",
			esModule: false,
			sourcemap: isDev,
		},
		plugins: [eslint(), babel(), terser()],
		external: Object.keys(pkg.dependencies),
	},
	{
		input: {
            index: 'src/index.js',
            fadeIn: 'src/prototypes/fadeIn.js',
            fadeOut: 'src/prototypes/fadeOut.js',
			fadeToggle: 'src/prototypes/fadeToggle.js',
			fadeTo: 'src/prototypes/fadeTo.js'
        },
		output: [
			{
				dir: "dist/esm",
				format: "es",
				sourcemap: isDev,
			},
			{
				dir: "dist/cjs",
				format: "cjs",
				esModule: false,
				sourcemap: isDev,
			},
		],
		plugins: [eslint()],
	},
];

