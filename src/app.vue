<template>
	<Body :class="[{ dark: isDarkMode }, isDarkMode ? 'bg-body-bg' : 'bg-white']">
		<AppNavbar />

		<main class="bg-fixed bg-bottom bg-image bg-repeat-x bg-scales-small md:bg-scales" :class="[{ dark: isDarkMode }, isDarkMode ? 'bg-image' : 'bg-image-light']">
			<!-- Content / Pages -->
			<NuxtPage />
		</main>
	</Body>
</template>

<script setup>
import '@fontsource/roboto'
import '@fontsource/roboto/700.css'
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
		background-image:linear-gradient(rgba(40, 40, 40, 0.8), rgba(50, 50, 50, 0.8)), url("assets/img/wallpaper.jpg");
		background-size: auto 140%;
	}
	.bg-image-light {
		background-image:linear-gradient(rgba(255, 255, 255, 0.8), rgba(168, 168, 168, 0.8)), url("assets/img/wallpaper.jpg");
		background-size: auto 140%;
	}
	.bg-scales {
		-webkit-animation: scales 10s linear 0s infinite;
		animation: scales 10s linear 0s infinite;
	}
	.bg-scales-small {
		-webkit-animation: scales 30s linear 0s infinite;
		animation: scales 30s linear 0s infinite;
	}
	@keyframes scales {
		0% {
			background-position-x:10%
		}
		50% {
			background-position-x:0%
		}
		to {
			background-position-x:10%
		}
	}
</style>
