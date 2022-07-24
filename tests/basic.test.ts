import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('App tests', async() => {
	await setup({
		rootDir: fileURLToPath(new URL('..', import.meta.url))
	})

	it('renders /', async() => {
		expect(await $fetch('/')).toContain('Bastian Jakobs')
	})

	it('renders /projects', async() => {
		expect(await $fetch('/projects')).toContain('clone on GitHub')
	})

	it('renders /teamspeak', async() => {
		expect(await $fetch('/teamspeak')).toContain('borsTiHD TS Viewer')
	})
})
