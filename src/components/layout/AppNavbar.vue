<template>
	<nav class="flex items-center justify-end w-full p-8 mx-auto my-0 fixed z-30">
		<div class="nav-primary flex items-center">
			<!-- Navbar items - hides on smaller devices -->
			<div class="hidden md:block">
				<NuxtLink
					v-for="(item, index) in items"
					:key="index"
					:to="item.to"
					class="group relative inline-block text-gray-900 dark:text-white p-1 sm:p-2 m-2 sm:m-4"
				>
					{{ item.name }}<span class="w-16 h-0.5 mx-auto block absolute bottom-2 left-0 right-0 group-hover:bg-primary transition-all duration-200 group-hover:scale-x-[0.3]" />
				</NuxtLink>
			</div>

			<!-- Darkmode Toggle -->
			<DarkModeToggle class="ml-16" />
		</div>
	</nav>
</template>

<script setup>
import DarkModeToggle from '@/components/misc/DarkModeToggle.vue'

const items = [
	{
		name: 'Home',
		to: '/'
	},
	{
		name: 'TeamSpeak',
		to: '/teamspeak'
	}
]
</script>

<style scope>
.nav-primary a.router-link-active  {
	font-weight: bold;
}
</style>
