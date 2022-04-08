<template>
	<nav class="flex items-center justify-end w-full p-8 mx-auto my-0 fixed z-30">
		<div class="nav-primary flex items-center">
			<!-- Navbar items - hides on smaller devices -->
			<div class="hidden md:block">
				<NuxtLink to="/" class="text-gray-900 sm:p-4 dark:text-white p-2 tracking-[0.01em]">
					Home
				</NuxtLink>

				<NuxtLink to="/teamspeak" class="text-gray-900 dark:text-white mx-2">
					TeamSpeak
				</NuxtLink>
			</div>

			<!-- Darkmode Toggle -->
			<DarkModeToggle class="ml-32" />
		</div>
	</nav>
</template>

<script setup>
import DarkModeToggle from '@/components/misc/DarkModeToggle.vue'
</script>
