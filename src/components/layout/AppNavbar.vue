<template>
	<nav class="navbar gap-2 bg-base-300 md:ml-auto md:m-4 md:rounded-lg md:w-fit z-50">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
				</label>
				<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
					<li v-for="(item, index) in navItems" :key="index">
						<NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
					</li>
				</ul>
			</div>
			<NuxtLink :to="navItems[0].to" class="btn btn-ghost normal-case text-xl">{{ appName }}</NuxtLink>
		</div>
		<div class="hidden md:flex flex-none gap-2">
			<ul class="menu menu-horizontal px-1">
				<li v-for="(item, index) in navItems" :key="index">
					<NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
				</li>
			</ul>
		</div>
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

const appName = 'borsTiHD'

// Navitems
const pagesStore = usePagesStore()
const navItems = computed(() => pagesStore.getPages)

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
