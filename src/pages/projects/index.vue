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
					:img="project.preview"
					image-hover
				>
					<template #header>{{ project.name }}</template>
					<template #default>
						<div class="flex flex-col">
							<AppDivider class="mt-0" />
							<p class="font-roboto" v-text="project.introduction" />
						</div>
					</template>
					<template #footer>
						<div class="flex flex-wrap gap-2">
							<span class="self-end">Tags:</span>
							<span v-for="(topic, i) in project.topics" :key="i" class="self-end">
								<span class="text-primary-light dark:text-primary">{{ topic }}</span>
								<span v-if="project.topics.length > i + 1">,</span>
							</span>
							<AppButton class="ml-auto" size="small" uppercase @click="openProject(project.projectName)">See more</AppButton>
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

// Changing title
const appStore = useAppStore()
const pageTitle = `Projects - ${appStore.getTitle}`
useHead({ title: pageTitle })

// Open project
const openProject = (name) => {
	return navigateTo({ path: `/projects/${name}` })
}

// Get all projects
const projectsStore = useProjectsStore()
const projects = projectsStore.getProjects
</script>
