import { defineNuxtPlugin } from 'nuxt3/app'

// // Register the component globally
export default defineNuxtPlugin(() => {
	return {
		provide: {
			pages: [
				{
					name: 'Home',
					to: '/'
				},
				{
					name: 'TeamSpeak',
					to: '/teamspeak'
				}
			]
		}
	}
})
