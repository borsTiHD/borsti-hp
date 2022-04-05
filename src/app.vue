<template>
	<div class="w-full min-h-screen bg-gray-100 dark:bg-gray-900 bg-fixed bg-cover bg-bottom bg-image" :class="{ dark: isDarkMode }">
		<!-- Darkmode toggle -->
		<label for="toggle-darkmode" class="flex items-center cursor-pointer">
			<div class="relative">
				<input id="toggle-darkmode" type="checkbox" class="sr-only" :checked="isDarkMode" @click="toggleDarkMode"> <!-- input -->
				<div class="w-10 h-4 bg-gray-400 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full shadow-inner" /> <!-- line -->
				<div class="dot absolute -left-1 -top-1 w-6 h-6 bg-primary rounded-full transition" /> <!-- dot -->
			</div>
			<div class="ml-3 text-gray-700 dark:text-white font-medium">Dark Mode</div>
		</label>

		<!-- Content / Pages -->
		<NuxtPage />
	</div>
</template>

<script setup>
import { ref } from 'vue'

const isDarkMode = ref(true)
const toggleDarkMode = () => {
	isDarkMode.value = !isDarkMode.value
}
</script>

<style scope>
	/* Background Wallpaper */
	.bg-image {
		background-image: url("assets/img/wallpaper.jpg")
	}

	/* Darkmode Toggle */
	input:checked ~ .dot {
		transform: translateX(100%);
	}
</style>
