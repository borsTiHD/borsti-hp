import { defineStore } from 'pinia'

const ipsum = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

export const useProjectsStore = defineStore({
	id: 'projects-store',
	state: () => ({
		projects: [...Array(10).keys()].map((i) => ({
			name: `Project ${i + 1}`,
			url: 'https://github.com/borsTiHD',
			topics: ['vue', 'nuxt', 'express', 'jws', 'socket.io'],
			preview: `https://picsum.photos/id/${i * 5}/860/860`,
			images: [...Array(10).keys()].map((x) => `https://picsum.photos/id/${i * 5 + x}/860/860`),
			introduction: ipsum,
			description: ipsum
		}))
	}),
	getters: {
		getProjects: (state) => state.projects,
		getProjectByName: (state) => (name) => state.projects.find((project) => project.name === name)
	}
})
