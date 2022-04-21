import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	srcDir: 'src/',
	runtimeConfig: {
		// The private keys which are only available within server-side
		TWITTER_KEY: process.env.TWITTER_KEY || '',
		TWITTER_SECRET: process.env.TWITTER_SECRET || '',
		// Keys within public, will be also exposed to the client-side
		public: {
			publicKey: '123'
		}
	},
	modules: [
		'@nuxtjs/tailwindcss'
	],
	buildModules: ['@pinia/nuxt'],
	tailwindcss: {
		viewer: false
	},
	vite: {
		plugins: [
			eslintPlugin()
		]
	}
})
