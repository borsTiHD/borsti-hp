<template>
	<div class="relative lg:min-h-[100vh] flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl gap-4">
		<div class="w-full lg:w-1/2 flex justify-center self-end">
			<img src="~/assets/img/borsti_bw.png" height="860" :alt="`Photo of ${name}`" class="w-full h-auto object-cover rounded-lg" loading="lazy">
		</div>
		<div class="w-full lg:w-1/2">
			<!-- Dividing line on smaller device -->
			<div class="border-t lg:border-t-0 border-gray-400 dark:border-gray-500 pt-6 lg:pt-0" />
			<!-- Text -->
			<h1 class="text-primary-light dark:text-primary border-l-2 border-primary drop-shadow-md text-6xl lg:text-7xl xl:text-8xl leading-none">{{ name }}</h1>
			<p class="text-gray-900 dark:text-white font-bold my-10 text-lg xl:text-xl leading-tight">{{ description }}</p>
		</div>
	</div>
</template>

<script setup>
const name = 'Bastian Jakobs'
const description = 'Creator • YouTuber • GFX Designer • Artist'
</script>

<style scope>
</style>
