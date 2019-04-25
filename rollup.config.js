import babel from 'rollup-plugin-babel'
import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const year = (new Date()).getFullYear()
const banner = `/* ${ pkg.title } v${ pkg.version } - ${ year } - Matteo Badini - MIT License */`
const isDev = process.env.BUILD === 'development'

let external = Object.keys(pkg.dependencies)
let plugins = [eslint(), babel()]

if (!isDev) {
	plugins.push(terser())
}

export default {
	input: 'src/vanilla-fade.js',
	output: [
		{
			banner: banner,
			file: pkg.main,
			format: 'iife',
			name: 'vanillaFade',
			sourcemap: true
		},
		{
			banner: banner,
			file: pkg.module,
			format: 'es',
			sourcemap: true
		},
	],
	plugins,
	external,
}
