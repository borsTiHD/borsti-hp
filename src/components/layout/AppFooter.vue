<template>
    <footer class="footer bg-neutral text-neutral-content mt-auto p-10 flex-grow">
        <div class="flex flex-col">
            <div class="flex items-end gap-4">
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
                <p>Press <kbd class="kbd kbd-sm">F</kbd> to pay respects.</p>
            </div>
            <div class="flex gap-4">
                <NuxtLink v-for="(item, index) in navItems" :key="index" :to="item.link" class="link link-hover hover:text-primary">{{ item.name }}</NuxtLink>
            </div>
            <p>{{ copyright }}</p>
        </div>
        <div class="ml-auto flex flex-col">
            <span class="footer-title ml-auto">{{ socialHeader }}</span>
            <div class="flex gap-4 ml-auto">
                <a v-for="(item, index) in socials" :key="index" :href="item.link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" role="img" class="fill-current iconify iconify--mdi hover:text-primary">
                        <path :d="item.icon" />
                    </svg>
                </a>
            </div>
            <p class="ml-auto mt-2 flex items-end gap-1 font-weight-thin content-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4Z"/></svg>
                with
                <svg xmlns="http://www.w3.org/2000/svg" class="text-rose-500" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" /></svg>
                in Germany
            </p>
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
    return `© ${year} ${pageTitle}`
})
</script>
