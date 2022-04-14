<template>
	<label for="toggle-darkmode" class="flex items-center cursor-pointer">
		<div class="relative">
			<input id="toggle-darkmode" type="checkbox" class="sr-only" :checked="isDarkMode" @click="toggleDarkMode"> <!-- input -->
			<div class="w-14 h-8 bg-gray-400 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-full" /> <!-- line -->
			<div class="text-gray-900 dark:text-white dot absolute left-2 top-2 w-4 h-4 rounded-full transition"> <!-- dot -->
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
					<path v-if="isDarkMode" fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z" />
					<path v-else fill="currentColor" d="m3.55 18.54l1.41 1.41l1.8-1.79l-1.42-1.42M11 22.45h2V19.5h-2m1-14a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.66l1.8 1.79l1.41-1.41l-1.79-1.8m1.79-12.28l-1.41-1.41l-1.8 1.79l1.42 1.42M13 .55h-2V3.5h2m-9 7H1v2h3m2.76-7.66l-1.8-1.79l-1.41 1.41l1.79 1.8l1.42-1.42Z" />
				</svg>
			</div>
		</div>
	</label>
</template>

<script setup>
import { computed } from 'vue'
import { useDarkModeStore } from '~/store/darkmode'

// Using store and create computed 'DarkMode' property
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)

// Toggle 'DarkMode' in store
const toggleDarkMode = () => { darkModeStore.setDarkMode(!isDarkMode.value) }
</script>

<style scoped>
	input:checked ~ .dot {
		transform: translateX(140%);
	}
</style>
