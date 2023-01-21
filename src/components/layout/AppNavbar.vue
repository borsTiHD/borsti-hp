<template>
    <nav class="navbar gap-4 bg-base-300 md:ml-auto md:m-4 md:rounded-lg md:w-fit z-50">
        <!-- Mobile Menu -->
        <div class="navbar-start md:hidden">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                    <li v-for="(item, index) in navItems" :key="index">
                        <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Search -->
        <div class="flex gap-2">
            <Transition name="bounce">
                <div v-if="showSearch" class="form-control">
                    <input ref="searchInput" type="text" placeholder="Search" class="input input-bordered" autofocus>
                </div>
            </Transition>
            <button class="btn btn-circle glass" @click="showSearchInput">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" /></svg>
            </button>
        </div>

        <!-- Links -->
        <div class="hidden md:flex gap-2 md:-ml-2">
            <ul class="menu menu-horizontal px-1">
                <li v-for="(item, index) in navItems" :key="index">
                    <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
                </li>
            </ul>
        </div>

        <!-- User options -->
        <div class="ml-auto dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people">
                </div>
            </label>
            <div class="menu menu-compact dropdown-content mt-3 p-2 gap-2 shadow bg-base-300 rounded-box w-52">
                <ul tabindex="0">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                </ul>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Select theme</span>
                    </label>
                    <select v-model="colorMode.preference" class="select select-sm select-info">
                        <option v-for="theme of themes" :key="theme">{{ theme }}</option>
                    </select>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { usePagesStore } from '~/store/pages'

// Navitems
const pagesStore = usePagesStore()
const navItems = computed(() => pagesStore.getPages)

// Search
const searchInput = ref(null)
const showSearch = ref(false)
const showSearchInput = () => {
    showSearch.value = !showSearch.value // Toggle search input
    if (showSearch.value) {
        nextTick(() => {
            searchInput.value.focus() // Focus search input
        })
    }
}

// DaisyUI theme switcher
const colorMode = useColorMode()
const themes = [
    'system',
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter'
]
</script>

<style>
/* Search input animation */
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>
