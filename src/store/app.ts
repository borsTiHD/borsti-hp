import { defineStore } from 'pinia'

export const useAppStore = defineStore({
	id: 'app-store',
	state: () => ({
		headTitle: 'borstihd.de'
	}),
	getters: {
		getTitle: (state) => state.headTitle
	}
})
