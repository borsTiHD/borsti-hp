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
        <section class="bg-base-300 flex justify-center p-8 lg:px-28 lg:py-10">
            <div class="flex flex-col justify-center">
                test
            </div>
        </section>
    </div>
</template>

<script setup>
import { useAppStore } from '~/store/app'

// Changing title
const pageName = 'Projects'
const subTitle = 'clone on GitHub'
const appStore = useAppStore()
const pageTitle = `${pageName} - ${appStore.getTitle}`
useHead({ title: pageTitle })
</script>
