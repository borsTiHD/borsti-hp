<template>
	<div class="flex flex-col text-gray-900 dark:text-white">
		<div class="flex justify-center">
			<div class="my-4">
				<h1 class="text-gray-900 dark:text-white text-5xl font-bold self-center">Projects</h1>
				<p class="text-primary-light dark:text-primary text">clone on GitHub</p>
			</div>
		</div>
		<section class="flex justify-center bg-white dark:bg-body-bg p-8">
			<div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
				<AppCard
					v-for="(project, index) in projects"
					:key="index"
					:img="project.img"
				>
					<template #header>{{ project.title }}</template>
					<template #default>
						<div class="flex flex-col">
							<AppDivider class="mt-0" />
							<p class="font-roboto" v-text="project.description" />
						</div>
					</template>
					<template #footer>
						<div class="flex flex-row gap-2">
							<span>Tags:</span>
							<span>{{ project.topics.join(', ') }}</span>
							<AppButton class="ml-auto" size="small" uppercase @click="openUrl(project.url)">See more</AppButton>
						</div>
					</template>
				</AppCard>
			</div>
		</section>
	</div>
</template>

<script setup>
import AppDivider from '@/components/misc/AppDivider.vue'
import AppButton from '@/components/misc/AppButton.vue'
import AppCard from '@/components/misc/AppCard.vue'
import { useAppStore } from '~/store/app'

// Changing Title
const appStore = useAppStore()
const pageTitle = `Projects - ${appStore.getTitle}`
useHead({ title: pageTitle })

// Open url in new tab
const openUrl = (url) => {
	window.open(url, '_blank')
}

const ipsum = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

// Projects
const projects = [...Array(10).keys()].map((i) => ({
	title: `Project ${i + 1}`,
	img: `https://picsum.photos/id/${i + 1}/860/860`,
	url: 'https://github.com/borsTiHD',
	topics: ['vue', 'nuxt', 'express', 'jws', 'socket.io'],
	description: ipsum
}))
</script>
