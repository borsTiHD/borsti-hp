import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSocialsStore } from '../../src/store/socials'

describe('Socials store tests', async() => {
	beforeEach(() => {
		// creates a fresh pinia and make it active so it's automatically picked
		// up by any useStore() call without having to pass it to it:
		// `useStore(pinia)`
		setActivePinia(createPinia())
	})

	it('checks every social link', async() => {
		const store = useSocialsStore()
		expect(store.getSocials.length).toBeGreaterThanOrEqual(0) // Check if socials aren't empty

		// Check every social link has several properties
		store.getSocials.forEach((social) => {
			expect(social).toHaveProperty('name') // Check if social object has a name
			expect(social).toHaveProperty('link') // Check if social object has a link
			expect(social).toHaveProperty('icon') // Check if social object has a icon
		})
	})
})
