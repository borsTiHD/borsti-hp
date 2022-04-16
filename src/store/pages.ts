import { defineStore } from 'pinia'

export const usePagesStore = defineStore({
	id: 'pages-store',
	state: () => ({
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
	}),
	getters: {
		getPages: (state) => state.pages
	}
})
