import { defineStore } from 'pinia'

export const useAppStore = defineStore({
    id: 'app-store',
    state: () => ({
        headTitle: 'borstihd.de',
        author: 'Bastian Jakobs'
    }),
    getters: {
        getTitle: (state) => state.headTitle,
        getAuthor: (state) => state.author
    }
})
