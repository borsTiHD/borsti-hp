import { defineNuxtConfig } from 'nuxt3'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	srcDir: 'src/',
	modules: [
		'@nuxtjs/tailwindcss'
	],
	buildModules: ['@pinia/nuxt'],
	tailwindcss: {
		// viewer: false
	},
	vite: {
		plugins: [
			eslintPlugin()
		]
	}
})
