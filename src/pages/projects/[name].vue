<template>
    <div v-if="project" class="flex flex-col">
        <!-- Headline -->
        <div class="flex justify-center">
            <div class="flex flex-col my-4">
                <h1 class="text-5xl font-bold">{{ project.name }}</h1>
                <p class="text-primary">{{ subTitle }}</p>
            </div>
        </div>

        <!-- Content -->
        <section class="bg-base-200 flex justify-center p-8 lg:px-28 lg:py-10">
            <div class="card bg-base-100 shadow-xl max-w-screen-xl">
                <div class="card-body">
                    <h2 class="card-title">{{ project.name }}</h2>
                    <!-- Project details -->
                    <div v-if="Array.isArray(project.description)" class="relative overflow-auto">
                        <img class="float-right my-4 md:m-4 md:mr-0 h-auto md:h-96 object-cover rounded-lg drop-shadow-lg" :src="project.preview" loading="lazy">
                        <p v-for="(sentence, index) in project.description" :key="index" class="text-justify" v-html="sentence" />
                    </div>
                    <div v-else class="relative overflow-auto">
                        <img class="float-right my-4 md:m-4 md:mr-0 h-auto md:h-96 object-cover rounded-lg drop-shadow-lg" :src="project.preview" loading="lazy">
                        <p class="text-justify">{{ project.description }}</p>
                    </div>

                    <!-- Github link and project topics -->
                    <div class="card-actions">
                        <div class="flex items-end gap-2 w-full">
                            <a v-if="project.url" class="btn btn-primary flex gap-1 normal-case" :href="project.url" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                                </svg>
                                <span>GitHub</span>
                            </a>
                            <div class="ml-auto flex flex-wrap gap-1">
                                <a v-for="(topic, topicIndex) in project.topics" :key="topicIndex" class="badge badge-secondary badge-outline" :href="npmLink(topic)" target="_blank">{{ topic }}</a>
                            </div>
                        </div>
                    </div>

                    <!-- Project images -->
                    <div class="divider">Images</div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <img
                            v-for="(image, imageIndex) in project.images"
                            :key="imageIndex"
                            :src="image"
                            loading="lazy"
                            :class="[
                                'w-full h-auto md:h-48 object-cover rounded-lg drop-shadow-lg',
                                'cursor-pointer transform transition duration-500 hover:object-scale-down hover:scale-150 hover:z-10'
                            ]"
                            @click="openImage(image)"
                        >
                    </div>

                    <!-- Modal for image view -->
                    <input id="image-gallery" v-model="showModal" type="checkbox" class="modal-toggle">
                    <label for="image-gallery" class="modal cursor-pointer">
                        <label class="modal-box w-fit max-w-7xl max-h-10/12 p-4" for="">
                            <label for="image-gallery" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <img :src="modalImage" class="object-cover">
                        </label>
                    </label>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/app'
import { useProjectsStore } from '~/store/projects'

// Getting router params
const route = useRoute()
const { name } = route.params

// Get all projects
const projectsStore = useProjectsStore()
const project = projectsStore.getProjectByName(name as string)

// If project not found, redirect to 'projects' page
if (!project) {
    useRouter().push('/projects')
}

// Changing title
const subTitle = 'project details'
const appStore = useAppStore()
const pageTitle = `${project?.name} - ${appStore.getTitle}`
useHead({ title: pageTitle })

// Generating Npm Search link
const npmLink = (topic: string) => useNpmSearch(topic)

// Opening image in modal
const showModal = ref(false)
const modalImage = ref('')
const openImage = (image: string) => {
    modalImage.value = image // Setting image to modal
    showModal.value = true // Opening modal
}
</script>
