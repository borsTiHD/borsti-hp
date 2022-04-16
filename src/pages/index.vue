<template>
	<div class="flex flex-col -mt-24">
		<section>
			<figure class="relative lg:min-h-[100vh] flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl gap-6 p-8 md:p-0">
				<div class="w-full lg:w-1/2 flex justify-center self-end drop-shadow-lg">
					<img src="~/assets/img/borsti_bw.png" height="860" :alt="`Photo of ${name}`" class="w-full h-auto object-cover rounded-lg drop-shadow-lg" loading="lazy">
				</div>
				<div class="w-full lg:w-1/2">
					<!-- Dividing line on smaller device -->
					<div class="border-t lg:border-t-0 border-gray-400 dark:border-gray-500 pt-6 lg:pt-0" />
					<!-- Introduction -->
					<figcaption>
						<p class="text-primary-light dark:text-primary font-montserrat font-bold my-5 text-lg lg:text-xl xl:text-2xl leading-tight uppercase" v-text="introduction" />
						<h1 class="text-gray-900 dark:text-white border-l-2 border-primary drop-shadow-md font-roboto text-6xl lg:text-7xl xl:text-8xl leading-none pl-6" v-text="name" />
						<h2 class="text-gray-900 dark:text-white font-montserrat my-10 text-xl lg:text-2xl xl:text-3xl leading-tight" v-text="underline" />
					</figcaption>
					<!-- About me -->
					<blockquote class="backdrop-blur-md bg-white/10 dark:bg-white/10 rounded-lg p-2 mb-4">
						<p class="text-gray-900 dark:text-white font-montserrat leading-relaxed max-w-prose m-2 mb-6" v-html="description" />
						<p class="text-gray-900 dark:text-white font-montserrat leading-relaxed max-w-prose m-2 mt-6" v-html="skillset" />
					</blockquote>
				</div>
			</figure>
		</section>

		<section class="bg-white dark:bg-body-bg p-8 md:p-0">
			<div class="container mx-auto py-8">
				<h1 class="text-gray-900 dark:text-white font-montserrat">Random Headline</h1>
				<AppCard>
					<p class="text-gray-900 dark:text-white font-roboto" v-text="ipsum" />
				</AppCard>
			</div>
		</section>
	</div>
</template>

<script setup>
import AppCard from '@/components/misc/AppCard.vue'

// const config = useRuntimeConfig()
// console.log(config.secret)
// console.log(config?.public?.TWITTER_KEY)
// console.log(config?.public?.TWITTER_SECRET)

// await $fetch('/api/getTweets')
// .then((res) => res.json())
// .then((res) => {
//  console.log(res)
// })
// .catch((err) => {
// console.log(err)
// })

// Skils for building skillset
const skills = [
	'design',
	'NodeJS',
	'Vue',
	'Electron',
	'PHP',
	'MySQL',
	'Linux server administration'
]

// Random color for skillset
const getRandomColor = () => {
	const colors = [
		'decoration-sky-500/60',
		'decoration-teal-500/60',
		'decoration-primary/60'
	]
	return colors[Math.floor(Math.random() * colors.length)]
}

// Creates skill tag
const getSkill = (value, skill = undefined, color = undefined) => {
	return `<a class="font-roboto italic underline underline-offset-2 ${color || getRandomColor()} decoration-2">${skill || skills[value]}</a>`
}

// Building texts
let counter = 0
const introduction = 'Hi, my name is'
const name = 'Bastian Jakobs'
const underline = 'Creator • YouTuber • GFX • Developer'
const description = `I'm a full-stack web developer from Germany, working as a software engineer at ${getSkill(false, 'Deutsche Telekom', 'decoration-magenta/80')}. I have the passion to make the web a beautiful place.`
const skillset = `Building web and desktop apps since school. I have a diverse set of skills, ranging from ${getSkill(counter++)}, ${getSkill(counter++)}, ${getSkill(counter++)}, ${getSkill(counter++)} all the way to ${getSkill(counter++)}, ${getSkill(counter++)} and ${getSkill(counter++)}.`

const ipsum = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
</script>

<style scoped>
</style>
