<template>
	<footer class="bg-gray-200 dark:bg-black flex flex-col flex-grow px-8 pt-8">
		<!-- Container -->
		<div class="text-gray-900 dark:text-white container xl:max-w-screen-xl lg:flex justify-between mx-auto mt-2 lg:mt-8 mb-8">
			<!-- Page links -->
			<section class="flex flex-row flex-wrap md:justify-center lg:flex-col divide-none md:divide-solid divide-y divide-gray-900 dark:divide-gray-400 mb-8 lg:mb-0 gap-2">
				<NuxtLink
					v-for="(item, index) in navItems"
					:key="index"
					:to="item.to"
					class="p-1 sm:p-2 m-4 sm:m-0 sm:mx-4 hover:text-primary"
				>
					{{ item.name }}
				</NuxtLink>
			</section>

			<!-- Social links -->
			<section class="py-0 lg:px-8 flex flex-col md:justify-center">
				<h2 class="text-gray-600 dark:text-gray-300 md:text-center lg:text-right mb-2 px-1 sm:px-2">{{ socialHeader }}</h2>
				<div class="flex flex-wrap items-center md:justify-center gap-4">
					<a
						v-for="(item, index) in socials"
						:key="index"
						:href="item.link"
						class="p-1 sm:p-2"
					>
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi hover:text-primary" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
							<path fill="currentColor" :d="item.icon" />
						</svg>
					</a>
				</div>
			</section>
		</div>

		<!-- Copyright -->
		<AppDivider />
		<section class="m-4 text-gray-600 dark:text-gray-300 flex justify-center gap-4">
			<span class="text-center">© 2022 borstihd.de</span>
		</section>
	</footer>
</template>

<script setup>
import AppDivider from '@/components/misc/AppDivider.vue'
import { usePagesStore } from '~/store/pages'
import { useSocialsStore } from '~/store/socials'

// Navitems
const pagesStore = usePagesStore()
const navItems = computed(() => pagesStore.getPages)

// Socials
const socialHeader = 'Follow, watch, like, contact - me'
const socialsStore = useSocialsStore()
const socials = computed(() => socialsStore.getSocials)
</script>

<style scoped>
</style>
