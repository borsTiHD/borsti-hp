<template>
	<div class="bg-white dark:bg-black bg-fixed bg-cover bg-bottom bg-image bg-repeat-x bg-scales" :class="[{ dark: isDarkMode }, isDarkMode ? 'bg-image' : 'bg-image-light']">
		<AppNavbar />

		<main class="w-full pt-16 px-8">
			<!-- Content / Pages -->
			<section class="container mx-auto">
				<NuxtPage />
			</section>
		</main>
	</div>
</template>

<script setup>
import '@fontsource/roboto'
import '@fontsource/montserrat'

import AppNavbar from '@/components/layout/AppNavbar.vue'
import { useDarkModeStore } from '~/store/darkmode'

// Using store and create computed 'DarkMode' property
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)
</script>

<style scope>
	/* Default font */
	body {
		font-family: "Roboto";
	}

	/* Background Wallpaper */
	.bg-image {
		background-image:linear-gradient(rgba(40, 40, 40, 0.8), rgba(50, 50, 50, 0.8)), url("assets/img/wallpaper.jpg")
	}
	.bg-image-light {
		background-image:linear-gradient(rgba(255, 255, 255, 0.8), rgba(168, 168, 168, 0.8)), url("assets/img/wallpaper.jpg")
	}
	.bg-scales {
		-webkit-animation: scales 100s linear 0s infinite;
		animation: scales 100s linear 0s infinite;
	}
	@keyframes scales {
		0% {
			background-position-x:0
		}
		50% {
			background-position-x:-200%
		}
		to {
			background-position-x:0
		}
	}
</style>
