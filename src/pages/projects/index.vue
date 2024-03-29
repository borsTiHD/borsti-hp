<template>
    <div class="flex flex-col">
        <!-- Headline -->
        <div class="flex justify-center">
            <div class="flex flex-col my-4">
                <h1 class="text-5xl font-bold">{{ pageName }}</h1>
                <p class="text-primary">{{ subTitle }}</p>
            </div>
        </div>

        <!-- Content -->
        <section class="bg-base-200 flex justify-center p-8 lg:px-28 lg:py-10">
            <div class="flex gap-8 flex-wrap justify-center">
                <!-- Project cards -->
                <div
                    v-for="(project, index) in projects"
                    :key="index"
                    :img="project.preview"
                    :class="[
                        'card w-80 sm:w-[32rem] bg-base-100 shadow-xl hover:shadow-2xl',
                        'hover:bg-base-200',
                        'transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105'
                    ]"
                >
                    <!-- Project image -->
                    <figure>
                        <NuxtLink :to="`/projects/${project.projectName}`" class="w-full h-48">
                            <img class="card-image-container w-full" :src="project.preview" :alt="project.name">
                        </NuxtLink>
                    </figure>

                    <!-- Project info -->
                    <div class="card-body">
                        <h2 class="card-title">{{ project.name }} <span v-if="project.updates" class="badge">NEW</span></h2>
                        <p v-html="project.introduction" />
                        <div class="card-actions">
                            <div class="flex items-end gap-2 w-full">
                                <div class="flex flex-wrap gap-1">
                                    <a v-for="(topic, topicIndex) in project.topics" :key="topicIndex" class="badge badge-secondary badge-outline" :href="npmLink(topic)" target="_blank">{{ topic }}</a>
                                </div>
                                <NuxtLink :to="`/projects/${project.projectName}`" class="ml-auto btn btn-sm btn-primary whitespace-nowrap">See more</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/app'
import { useProjectsStore } from '~/store/projects'

// Changing title
const pageName = 'Projects'
const subTitle = 'clone on GitHub'
const appStore = useAppStore()
const pageTitle = `${pageName} - ${appStore.getTitle}`
useHead({ title: pageTitle })

// Get all projects
const projectsStore = useProjectsStore()
const projects = projectsStore.getProjects

// Generating Npm Search link
const npmLink = (topic: string) => useNpmSearch(topic)
</script>
