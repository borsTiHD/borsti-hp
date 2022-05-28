<template>
	<div class="flex flex-col text-gray-900 dark:text-white">
		<!-- Headline -->
		<div class="flex justify-center">
			<div class="my-4">
				<h1 class="text-gray-900 dark:text-white text-5xl font-bold self-center">{{ project.name }}</h1>
				<p class="text-primary-light dark:text-primary text">project details</p>
			</div>
		</div>

		<!-- Main -->
		<section class="flex justify-center bg-white dark:bg-body-bg p-8">
			<div class="container mx-auto">
				<AppCard>
					<template #header>{{ project.name }}</template>
					<template #default>
						<!-- Content -->
						<div v-if="Array.isArray(project.description)" class="relative overflow-auto">
							<img class="float-right my-4 md:m-4 md:mr-0 h-auto md:h-96 object-cover rounded-lg drop-shadow-lg" :src="project.preview" loading="lazy">
							<p v-for="(sentence, index) in project.description" :key="index" class="text-justify" v-html="sentence" />
						</div>
						<div v-else class="relative overflow-auto">
							<img class="float-right my-4 md:m-4 md:mr-0 h-auto md:h-96 object-cover rounded-lg drop-shadow-lg" :src="project.preview" loading="lazy">
							<p class="text-justify">{{ project.description }}</p>
						</div>

						<!-- Topics / tags -->
						<div class="flex flex-wrap justify-end gap-2 mt-4 md:mt-2">
							<NuxtLink v-if="project.url" :to="project.url" class="mr-auto" target="_blank">
								<AppButton>
									<span class="flex flex-row gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
											<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
										</svg>
										GitHub
									</span>
								</AppButton>
							</NuxtLink>
							<!-- Listing Topics/Tags -->
							<AppListTopics :topics="project.topics" />
						</div>
						<AppDivider />

						<!-- Image gallery -->
						<ImageGallery :images="project.images" />
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
import AppListTopics from '@/components/misc/AppListTopics.vue'
import ImageGallery from '@/components/misc/ImageGallery.vue'
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
