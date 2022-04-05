<template>
	<div class="w-full min-h-screen bg-gray-100 dark:bg-gray-900 bg-fixed bg-cover bg-bottom bg-image" :class="{ dark: isDarkMode }">
		<!-- Darkmode Toggle -->
		<div class="flex flex-col">
			<div class="flex justify-center">
				<DarkModeToggle />
			</div>
		</div>

		<!-- Content / Pages -->
		<NuxtPage />
	</div>
</template>

<script setup>
import DarkModeToggle from '@/components/misc/DarkModeToggle.vue'
import { useDarkModeStore } from '~/store/darkmode'

// Using store and create computed 'DarkMode' property
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)
</script>

<style scope>
	/* Background Wallpaper */
	.bg-image {
		background-image: url("assets/img/wallpaper.jpg")
	}
</style>
