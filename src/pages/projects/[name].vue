<template>
	<div class="flex flex-col text-gray-900 dark:text-white">
		<!-- Modal - for images -->
		<AppModal v-model="showModal" :image="image" />

		<!-- Headline -->
		<div class="flex justify-center">
			<div class="my-4">
				<h1 class="text-gray-900 dark:text-white text-5xl font-bold self-center">{{ project.name }}</h1>
				<p class="text-primary-light dark:text-primary text">clone on GitHub</p>
			</div>
		</div>

		<!-- Main -->
		<section class="flex justify-center bg-white dark:bg-body-bg p-8">
			<div class="container mx-auto">
				<AppCard>
					<template #header>Details:</template>
					<template #default>
						<!-- Content -->
						<div class="relative overflow-auto">
							<img class="float-right m-4 h-96 object-cover rounded-lg drop-shadow-lg" :src="project.preview" loading="lazy">
							<p class="text-justify">{{ project.introduction + project.introduction + project.introduction + project.introduction }}</p>
						</div>

						<!-- Topics / tags -->
						<AppDivider />
						<div class="flex flex-row gap-2">
							<span>Tags:</span>
							<span>{{ project.topics.join(', ') }}</span>
							<AppButton v-if="project.url" class="ml-auto" @click="openUrl(project.url)">GitHub</AppButton>
						</div>
						<AppDivider />

						<!-- Image gallery -->
						<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
							<img
								v-for="(img, index) in project.images"
								:key="index"
								:src="img"
								height="100%"
								class="card-image w-full h-48 object-cover rounded-lg drop-shadow-lg cursor-pointer transform transition duration-500 hover:object-scale-down hover:scale-150 hover:z-10"
								loading="lazy"
								@click="openImage(img)"
							>
						</div>
					</template>
				</AppCard>
			</div>
		</section>
	</div>
</template>

<script setup>
import AppModal from '@/components/layout/AppModal.vue'
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

// Open image in modal
const image = ref('')
const showModal = ref(false)
const openImage = (src) => {
	image.value = src
	showModal.value = true
}

// Open url in new tab
const openUrl = (url) => {
	window.open(url, '_blank')
}
</script>
