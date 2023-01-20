<template>
    <div class="bg-fixed bg-top bg-repeat-x bg-scales-small md:bg-scales bg-[length:auto_140%] flex flex-col min-h-screen" :class="[themeMode]">
        <AppNavbar />
        <main>
            <NuxtPage />
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
import '@fontsource/roboto'
import '@fontsource/roboto/700.css'
import '@fontsource/montserrat'

import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

// Theme Mode - Dark/Light background image depending on theme
const colorMode = useColorMode()
const themeMode = computed(() => {
    // List of themes that use dark background image
    const darkThemes = [
        'dark',
        'synthwave',
        'halloween',
        'forest',
        'aqua',
        'black',
        'luxury',
        'dracula',
        'business',
        'night'
    ]

    // List of themes that use light background image
    const lightThemes = [
        'light',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'garden',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'cmyk',
        'autumn',
        'acid',
        'lemonade',
        'winter'
    ]

    if (darkThemes.includes(colorMode.value)) { return 'bg-dark-pattern' } // Dark background image
    else if (lightThemes.includes(colorMode.value)) { return 'bg-light-pattern' } // Light background image
    else if (colorMode.value === 'retro') { return 'bg-sepia-pattern' } // Sepia background image
    else if (colorMode.value === 'coffee') { return 'bg-sepia-dark-pattern' } // Sepia background image
    else if (colorMode.value === 'valentine') { return 'bg-valentine-pattern' } // Valentine background image
    else if (colorMode.value === 'cyberpunk') { return 'bg-cyberpunk-pattern' } // Cyberpunk background image

    // Default to dark background image
    return 'bg-dark-pattern'
})
</script>

<style>
	/* Default font */
	body {
		font-family: "Roboto";
	}

	/* Background Wallpaper */
	.bg-scales {
		-webkit-animation: scales 10s linear 0s infinite;
		animation: scales 10s linear 0s infinite;
	}
	.bg-scales-small {
		-webkit-animation: scales 30s linear 0s infinite;
		animation: scales 30s linear 0s infinite;
	}
	@keyframes scales {
		0% { background-position-x:10% }
		50% { background-position-x:0% }
		to { background-position-x:10% }
	}
</style>
