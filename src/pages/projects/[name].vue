<template>
	<div class="flex flex-col text-gray-900 dark:text-white">
		<div class="flex justify-center">
			<div class="my-4">
				<h1 class="text-gray-900 dark:text-white text-5xl font-bold self-center">Project: {{ project.name }}</h1>
				<p class="text-primary-light dark:text-primary text">clone on GitHub</p>
			</div>
		</div>
		<section class="flex justify-center bg-white dark:bg-body-bg p-8">
			<div class="container mx-auto">
				<AppCard :img="project.preview">
					<template #header>{{ project.name }}</template>
					<template #default>
						<AppDivider class="mt-0" />
						<div class="flex flex-col">
							<p class="font-roboto" v-text="project.introduction" />
						</div>
						<AppDivider />
						<div class="grid grid-cols-4 gap-4">
							<img
								v-for="(img, index) in project.images"
								:key="index"
								:src="img"
								height="100%"
								class="card-image w-full h-48 object-cover rounded-lg drop-shadow-lg transform transition duration-500 hover:object-scale-down hover:scale-150 hover:h-full hover:z-50"
								loading="lazy"
							>
						</div>
					</template>
					<template #footer>
						<div class="flex flex-row gap-2">
							<span>Tags:</span>
							<span>{{ project.topics.join(', ') }}</span>
							<AppButton class="ml-auto" size="small" uppercase @click="openProject(project.name)">See more</AppButton>
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
import { useProjectsStore } from '~/store/projects'

// Getting router params
const route = useRoute()
const { name } = route.params

// Getting project by name
const projectsStore = useProjectsStore()
const project = projectsStore.getProjectByName(name)

// Changing title
const appStore = useAppStore()
const pageTitle = `${project.name} - ${appStore.getTitle}`
useHead({ title: pageTitle })
</script>