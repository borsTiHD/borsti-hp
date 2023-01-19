<template>
	<nav class="navbar ml-auto m-4 gap-2 rounded-lg bg-base-300/40 w-fit">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl">borsTiHD</a>
		</div>
		<div class="flex-none gap-2">
			<ul class="menu menu-horizontal px-1">
				<NuxtLink v-for="(item, index) in navItems" :key="index" :to="item.to">
					<li><a>{{ item.name }}</a></li>
				</NuxtLink>
			</ul>
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img src="https://placeimg.com/80/80/people">
					</div>
				</label>
				<div class="mt-3 p-2 gap-2 shadow menu menu-compact dropdown-content bg-base-300/80 rounded-box w-52">
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
							<option disabled selected>Theme</option>
							<option v-for="theme of themes" :key="theme">{{ theme }}</option>
						</select>
					</div>
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