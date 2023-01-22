<template>
    <nav class="navbar gap-2 bg-base-300 md:ml-auto md:m-4 md:rounded-lg md:w-fit z-50">
        <!-- Mobile Menu -->
        <div class="navbar-start md:hidden">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li v-for="(item, index) in navItems" :key="index">
                        <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Search -->
        <div class="ml-auto flex gap-2">
            <Transition name="bounce">
                <div v-if="showSearch" class="form-control">
                    <div class="dropdown">
                        <input ref="searchInputRef" v-model="search" tabindex="0" type="search" placeholder="Search..." class="input input-bordered input-info" autofocus @blur="search === '' ? showSearch = false : false" @keydown="searchKeydown($event, 'SEARCH')">
                        <div v-if="search" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <ul ref="resultsRef" class="form-control">
                                <li v-for="(result, index) in searchResults" :key="index" tabindex="0" type="results" @click="openResult(result.item)" @keydown="searchKeydown($event, result.item)">
                                    <a>
                                        <svg v-if="result.item.to" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {{ result.item.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Transition>
            <button class="btn btn-circle btn-ghost" @click="showSearchInput">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" /></svg>
            </button>
        </div>

        <!-- Links -->
        <div class="hidden md:flex gap-2">
            <ul class="menu menu-horizontal px-1">
                <li v-for="(item, index) in navItems" :key="index">
                    <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
                </li>
            </ul>
        </div>

        <!-- User options -->
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8.999 3.999a4.002 4.002 0 0 0 0 8.003a3.999 3.999 0 0 0 3.998-4.005A3.998 3.998 0 0 0 9 4zm0 10C6.329 13.999 1 15.332 1 17.997V20H12.08a6.233 6.233 0 0 1-.078-1.001c0-1.514.493-2.988 1.407-4.199c-1.529-.523-3.228-.801-4.41-.801zm8.99 0a.261.261 0 0 0-.25.21l-.19 1.319a4.091 4.091 0 0 0-.85.492l-1.24-.502a.265.265 0 0 0-.308.112l-1.001 1.729a.255.255 0 0 0 .059.322l1.06.83a3.95 3.95 0 0 0 0 .981l-1.06.83a.26.26 0 0 0-.059.318l1.001 1.729c.059.111.19.151.308.111l1.24-.497c.258.2.542.366.85.488l.19 1.318c.02.122.122.21.25.21h2.001c.122 0 .23-.088.25-.21l.19-1.318c.297-.132.59-.288.84-.488l1.25.497c.111.04.239 0 .313-.111l.996-1.729a.256.256 0 0 0-.059-.317l-1.07-.83c.02-.162.04-.323.04-.494c0-.171-.01-.328-.04-.488l1.06-.83c.087-.084.121-.21.059-.322l-.996-1.729a.263.263 0 0 0-.313-.113l-1.24.503c-.26-.2-.543-.37-.85-.492l-.19-1.32a.238.238 0 0 0-.24-.21M18.989 17.5c.83 0 1.5.669 1.5 1.499c0 .83-.67 1.498-1.5 1.498S17.49 19.83 17.49 19s.669-1.499 1.499-1.499z" /></svg>
            </label>
            <div class="menu menu-compact dropdown-content mt-3 p-2 gap-2 shadow bg-base-100 rounded-box w-52">
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
import Fuse from 'fuse.js'
import { usePagesStore } from '~/store/pages'
import { useProjectsStore } from '~/store/projects'

// Navitems
const pagesStore = usePagesStore()
const navItems = computed(() => pagesStore.getPages)

// Projects
const projectsStore = useProjectsStore()

// Search
const search = ref(null)
const searchInputRef = ref(null)
const showSearch = ref(false)
const showSearchInput = () => {
    showSearch.value = !showSearch.value // Toggle search input
    if (showSearch.value) {
        nextTick(() => { searchInputRef.value.focus() }) // Focus search input
    }
}

// Tabbing/scrolling through input and search results
const resultsRef = ref(null)
const searchKeydown = (event, result) => {
    // Prevent scrolling when pressing arrow keys
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault()
    }

    // Determine if the user is tabbing through the search input or the search results
    if (event.target.type === 'search') {
        // Tabbing through search input

        // If no search results, return
        if (!searchResults.value.length) { return false }

        // If user pressed on the search input, focus on the first search result
        if (event.key === 'ArrowDown') {
            nextTick(() => { resultsRef.value.children[0].focus() })
            return true
        }

        // If user pressed enter on the search input, navigate to the first search result
        if (event.key === 'Enter') {
            nextTick(() => { resultsRef.value.children[0].click() })
            return true
        }
    } else if (event.target.type === 'results') {
        // Tabbing through search results

        // If the user presses arrow up, focus on the previous result
        if (event.key === 'ArrowUp') {
            const index = searchResults.value.findIndex((r) => r.item === result)
            if (index > 0) {
                nextTick(() => { resultsRef.value.children[index - 1].focus() })
                return true
            }

            // If the user presses arrow up on the first result, focus on the search input
            if (index === 0) {
                nextTick(() => { searchInputRef.value.focus() })
                return true
            }
        }

        // If the user presses arrow down, focus on the next result
        if (event.key === 'ArrowDown') {
            const index = searchResults.value.findIndex((r) => r.item === result)
            if (index < searchResults.value.length - 1) {
                nextTick(() => { resultsRef.value.children[index + 1].focus() })
                return true
            }
        }

        // If the user presses enter, navigate to the result
        if (event.key === 'Enter') {
            openResult(result)
            return true
        }
    }
}

// Fuzzy search setup
const searchObject = [...navItems.value, ...projectsStore.getProjects] // Search object with pages and projects
const fuse = new Fuse(searchObject, {
    keys: ['name', 'projectName', 'introduction', 'description', 'topics'], // Search keys for the search object
    // includeScore: true,
    threshold: 0.3,
    minMatchCharLength: 2,
    ignoreLocation: true // Ignore location of the search term
})

// Search with fuzzy search
const searchResults = computed(() => {
    if (search.value) {
        return fuse.search(search.value)
    }
    return []
})

// Navigate to search result
const openResult = (result) => {
    if (result.to) { navigateTo({ path: result.to }) } // Navigate to page
    else { navigateTo({ path: `/projects/${result.projectName}` }) } // Navigate to project
}

// DaisyUI theme switcher
const colorMode = useColorMode()
const themes = [
    'system',
    'light',
    'dark',
    'slime',
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
