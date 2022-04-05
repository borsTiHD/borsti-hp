<template>
	<label for="toggle-darkmode" class="flex items-center cursor-pointer">
		<div class="relative">
			<input id="toggle-darkmode" type="checkbox" class="sr-only" :checked="isDarkMode" @click="toggleDarkMode"> <!-- input -->
			<div class="w-10 h-4 bg-gray-400 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full shadow-inner" /> <!-- line -->
			<div class="dot absolute -left-1 -top-1 w-6 h-6 bg-primary rounded-full transition" /> <!-- dot -->
		</div>
		<div class="ml-3 text-gray-700 dark:text-white font-medium">Dark Mode</div>
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

<style scope>
	input:checked ~ .dot {
		transform: translateX(100%);
	}
</style>
