<template>
    <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
            <!-- Icon by: https://icones.js.org/collection/icon-park-outline?s=source+code -->
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48" fill-rule="evenodd" clip-rule="evenodd" class="fill-current">
                <mask id="ipSSourceCode0">
                    <g fill="none">
                        <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v14.882" />
                        <path fill="#fff" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4v-9Z" />
                        <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m34 33l-4 4l4 4m6-8l4 4l-4 4" />
                        <circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)" />
                        <circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)" />
                    </g>
                </mask>
                <path fill d="M0 0h48v48H0z" mask="url(#ipSSourceCode0)" />
            </svg>
            <div class="flex gap-4">
                <NuxtLink v-for="(item, index) in navItems" :key="index" :to="item.link" class="link link-hover hover:text-primary">{{ item.name }}</NuxtLink>
            </div>
            <p>{{ copyright }}</p>
        </div>
        <div class="h-full ml-auto flex flex-col justify-center">
            <span class="footer-title ml-auto">{{ socialHeader }}</span>
            <div class="flex gap-4 ml-auto">
                <a v-for="(item, index) in socials" :key="index" :href="item.link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" role="img" class="fill-current iconify iconify--mdi hover:text-primary">
                        <path :d="item.icon" />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { usePagesStore } from '~/store/pages'
import { useSocialsStore } from '~/store/socials'
import { useAppStore } from '~/store/app'

// Changing title
const appStore = useAppStore()
const pageTitle = appStore.getTitle

// Navitems
const pagesStore = usePagesStore()
const navItems = computed(() => pagesStore.getPages)

// Socials
const socialHeader = 'Social - follow, watch, like, contact me'
const socialsStore = useSocialsStore()
const socials = computed(() => socialsStore.getSocials)

// Copyright with current year
const copyright = computed(() => {
    const date = new Date()
    const year = date.getFullYear()
    return `© ${year} ${pageTitle} - Bastian Jakobs`
})
</script>
