<template>
	<div class="w-full min-h-screen pt-8 px-8 bg-fixed bg-cover bg-bottom bg-image" :class="[{ dark: isDarkMode }, isDarkMode ? 'bg-image' : 'bg-image-light']">
		<!-- Darkmode Toggle -->
		<div class="flex flex-col">
			<div class="flex justify-center">
				<NuxtLink to="/" class="text-gray-900 dark:text-white mx-2">
					Home
				</NuxtLink>

				<NuxtLink to="/teamspeak" class="text-gray-900 dark:text-white mx-2">
					TeamSpeak
				</NuxtLink>

				<DarkModeToggle class="ml-32" />
			</div>
		</div>

		<!-- Content / Pages -->
		<div class="container mx-auto">
			<NuxtPage />
		</div>
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
		background-image:linear-gradient(rgba(40, 40, 40, 0.8), rgba(50, 50, 50, 0.8)), url("assets/img/wallpaper.jpg")
	}
	.bg-image-light {
		background-image:linear-gradient(rgba(255, 255, 255, 0.8), rgba(168, 168, 168, 0.8)), url("assets/img/wallpaper.jpg")
	}
</style>
