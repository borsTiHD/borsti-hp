<template>
	<figure class="relative lg:min-h-[100vh] flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl gap-4">
		<div class="w-full lg:w-1/2 flex justify-center self-end drop-shadow-lg">
			<img src="~/assets/img/borsti_bw.png" height="860" :alt="`Photo of ${name}`" class="w-full h-auto object-cover rounded-lg drop-shadow-lg" loading="lazy">
		</div>
		<figcaption class="w-full lg:w-1/2">
			<!-- Dividing line on smaller device -->
			<div class="border-t lg:border-t-0 border-gray-400 dark:border-gray-500 pt-6 lg:pt-0" />
			<!-- Text -->
			<blockquote>
				<p class="text-primary-light dark:text-primary font-montserrat font-bold my-5 text-lg lg:text-xl xl:text-2xl leading-tight uppercase">{{ introduction }}</p>
				<h1 class="text-gray-900 dark:text-white border-l-2 border-primary drop-shadow-md font-roboto text-6xl lg:text-7xl xl:text-8xl leading-none pl-6">{{ name }}</h1>
				<p class="text-gray-900 dark:text-white font-montserrat font-bold my-10 text-xl lg:text-2xl xl:text-3xl leading-tight">{{ underline }}</p>
				<p class="text-gray-900 dark:text-white font-montserrat text-base md:text-md leading-relaxed max-w-prose mb-4 p-2 backdrop-blur-md bg-white/10 dark:bg-white/10">{{ description }}</p>
			</blockquote>
		</figcaption>
	</figure>
</template>

<script setup>
const introduction = 'Hello, my name is'
const name = 'Bastian Jakobs'
const underline = 'Creator • YouTuber • GFX Designer • Artist'
const description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
</script>

<style scope>
</style>
