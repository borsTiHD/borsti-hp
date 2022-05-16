<template>
	<Body :class="[{ dark: isDarkMode }, isDarkMode ? 'bg-body-bg' : 'bg-white']">
		<div class="bg-fixed bg-bottom bg-image bg-repeat-x bg-scales-small md:bg-scales flex flex-col min-h-screen" :class="[isDarkMode ? 'bg-image' : 'bg-image-light']">
			<AppNavbar />
			<main class="pt-24">
				<NuxtPage />
			</main>
			<AppFooter />
		</div>
	</Body>
</template>

<script setup>
import '@fontsource/roboto'
import '@fontsource/roboto/700.css'
import '@fontsource/montserrat'

import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useDarkModeStore } from '~/store/darkmode'

// Using store and create computed 'DarkMode' property
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)
</script>

<style>
	/* Default font */
	body {
		font-family: "Roboto";
	}

	/* Background Wallpaper */
	.bg-image {
		background-image:linear-gradient(rgba(40, 40, 40, 0.8), rgba(50, 50, 50, 0.8)), url("/img/wallpaper.jpg");
		background-size: auto 140%;
	}
	.bg-image-light {
		background-image:linear-gradient(rgba(255, 255, 255, 0.8), rgba(168, 168, 168, 0.8)), url("/img/wallpaper.jpg");
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

	/* Skeleton loader - https://www.linkedin.com/pulse/optimising-images-skeleton-lazy-loading-edwin-guo */
	.skeleton {
		border-radius: 10px;
		margin: 0 auto;
		width: 300px;
		height: 200px;

		background-image: linear-gradient(
			100deg,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0) 80%
			),
			linear-gradient(lightgray 400px, transparent 0);

		background-repeat: repeat-y;

		background-size: 50px 100%, 100% 100%;

		background-position: 0 0, 0 120px;

		animation: shine 1s infinite;
	}

	@keyframes shine {
		to {
			background-position: 100% 0, 0 0, 0 40px, /* moves the highlight to the right */
			0 80px, 0 120px;
		}
	}
</style>
