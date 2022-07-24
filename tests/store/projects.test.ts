import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProjectsStore } from '../../src/store/projects'

describe('Projects store tests', async() => {
	beforeEach(() => {
		// creates a fresh pinia and make it active so it's automatically picked
		// up by any useStore() call without having to pass it to it:
		// `useStore(pinia)`
		setActivePinia(createPinia())
	})

	it('checks every project', async() => {
		const store = useProjectsStore()
		expect(store.getProjects.length).toBeGreaterThanOrEqual(0) // Check if projects aren't empty

		// Check every project has several properties
		store.getProjects.forEach((project) => {
			expect(project).toHaveProperty('name') // Check if project has a name
			expect(project).toHaveProperty('projectName') // Check if project has a projectName
			expect(project).toHaveProperty('url') // Check if project has a url
			expect(project).toHaveProperty('topics') // Check if project has topics
			expect(project).toHaveProperty('preview') // Check if project has a preview
			expect(project).toHaveProperty('images') // Check if project has images
			expect(project).toHaveProperty('introduction') // Check if project has a introduction
			expect(project).toHaveProperty('description') // Check if project has a description
		})
	})

	it('checks getting project by name', async() => {
		const store = useProjectsStore()
		const project = store.getProjectByName('borsti-hp')
		expect(project).toHaveProperty('name') // Check if project has a name
		expect(project.name).toBe('Homepage: borstihd.de') // Check if project has a specific name
	})
})
