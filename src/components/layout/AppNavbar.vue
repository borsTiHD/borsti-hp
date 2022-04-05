<template>
	<div class="flex flex-col">
		<div class="flex justify-center">
			<NuxtLink to="/" class="text-gray-900 dark:text-white mx-2">
				Home
			</NuxtLink>

			<NuxtLink to="/teamspeak" class="text-gray-900 dark:text-white mx-2">
				TeamSpeak
			</NuxtLink>

			<!-- Darkmode Toggle -->
			<DarkModeToggle class="ml-32" />
		</div>
	</div>
</template>

<script setup>
import DarkModeToggle from '@/components/misc/DarkModeToggle.vue'
</script>
