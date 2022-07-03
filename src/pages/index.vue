<template>
	<div class="flex flex-col -mt-24">
		<section>
			<figure class="relative lg:min-h-[100vh] flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl gap-6 p-8 md:p-0">
				<div class="w-full lg:w-1/2 flex justify-center self-end drop-shadow-lg">
					<img src="~/assets/img/borsti_bw.png" height="860" :alt="`Photo of ${name}`" class="w-full h-auto object-cover rounded-lg drop-shadow-lg" loading="lazy">
				</div>
				<div class="w-full lg:w-1/2">
					<!-- Dividing line on smaller device -->
					<AppDivider class="lg:border-t-0 pt-6 lg:pt-0" />
					<!-- Introduction -->
					<figcaption>
						<p class="text-primary-light dark:text-primary font-montserrat font-bold my-5 text-lg lg:text-xl xl:text-2xl leading-tight uppercase" v-text="introduction" />
						<h1 class="text-gray-900 dark:text-white border-l-2 border-primary drop-shadow-md font-roboto text-6xl lg:text-7xl xl:text-8xl leading-none pl-6" v-text="name" />
						<h2 class="text-gray-900 dark:text-white font-montserrat my-10 text-xl lg:text-2xl xl:text-3xl leading-tight" v-text="underline" />
					</figcaption>
					<!-- About me -->
					<blockquote class="backdrop-blur-md bg-white/10 dark:bg-white/10 rounded-lg p-2 mb-4">
						<p
							v-for="(item, index) in descriptions"
							:key="index"
							class="text-gray-900 dark:text-white font-montserrat leading-relaxed max-w-prose m-2"
							:class="index !== (descriptions.length - 1) ? 'mb-6' : ''"
							v-html="item"
						/>
					</blockquote>
					<div class="invisible md:visible mt-8">
						<AppButton class="font-montserrat tracking-widest" uppercase @click="aboutMeClick">Know me ↴</AppButton>
					</div>
				</div>
			</figure>
		</section>

		<section id="about-me" class="bg-white dark:bg-body-bg p-8 md:p-0">
			<div class="container mx-auto py-8 text-gray-900 dark:text-white ">
				<h1 class="font-montserrat text-lg lg:text-xl xl:text-2xl">About Me</h1>
				<!-- Text and logos separated in two columns without mixing them...
				<AppCard class="mt-2">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div>
							<p
								v-for="(item, index) in moreAboutMe"
								:key="index"
								class="text-gray-900 dark:text-white font-roboto leading-relaxed m-2"
								:class="index !== (moreAboutMe.length - 1) ? 'mb-6' : ''"
								v-html="item"
							/>
						</div>
						<div>
							<ImageGallery :images="logos" no-hover fullsize />
						</div>
					</div>
				</AppCard> -->
				<AppCard class="mt-2">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div>
							<p
								v-for="(item, index) in moreAboutMe.slice(0, 2)"
								:key="index"
								class="text-gray-900 dark:text-white font-roboto leading-relaxed m-2 mb-6"
								v-html="item"
							/>
							<div class="hidden md:block mt-10"><ImageGallery :images="logos.slice(0, 4)" no-hover fullsize /></div>
						</div>
						<div>
							<div class="hidden md:block"><ImageGallery :images="logos.slice(4)" no-hover fullsize /></div>
							<p
								v-for="(item, index) in moreAboutMe.slice(2)"
								:key="index"
								class="text-gray-900 dark:text-white font-roboto leading-relaxed m-2"
								:class="index !== 2 ? 'mb-6' : ''"
								v-html="item"
							/>
						</div>
						<div class="block md:hidden"><ImageGallery :images="logos" no-hover fullsize /></div>
					</div>
				</AppCard>
			</div>
		</section>
	</div>
</template>

<script setup>
import AppCard from '@/components/misc/AppCard.vue'
import AppButton from '@/components/misc/AppButton.vue'
import AppDivider from '@/components/misc/AppDivider.vue'
import ImageGallery from '@/components/misc/ImageGallery.vue'
import { useAppStore } from '~/store/app'

// Changing title
const appStore = useAppStore()
const pageTitle = `Home - ${appStore.getTitle}`
useHead({ title: pageTitle })

// Testing API fetch
// await $fetch('/api/getTweets')
// .then((res) => {
// console.log(res)
// })
// .catch((err) => {
// console.log(err)
// })

// About me button
const aboutMeClick = () => {
	const el = document.getElementById('about-me')
	el.scrollIntoView({ behavior: 'smooth' })
}

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
const descriptions = [
	`I'm a full-stack web developer from Germany, working as a software engineer at ${getSkill(false, 'Deutsche Telekom', 'decoration-magenta/80')}. I have the passion to make the web a beautiful place.`,
	`Building web and desktop apps since school. I have a diverse set of skills, ranging from ${getSkill(counter++)}, ${getSkill(counter++)}, ${getSkill(counter++)}, ${getSkill(counter++)} all the way to ${getSkill(counter++)}, ${getSkill(counter++)} and ${getSkill(counter++)}.`
]

const moreAboutMe = [
	'I\'ve always been involved in nerdy PC stuff, building my own computers, solving friends software and hardware problems, experimenting around with software and operating systems until you crashed the OS and had to reinstall everything. Modded consoles and tinkered with them and even didn\'t stop at the Dreambox (nowadays with the Raspberry Pi). You name it.',
	'The passion of software development started in the early Counter-Strike era when I founded a clan together with friends and developed my first static website for our clan page.',
	'Later in school I chose Android programming and dynamic websites (php + mysql) as electives. At that time I also made my first experiences with BackTrack (now known as Kali Linux) and cracked my parents WLAN with a netbook.',
	'And today I bring self-taught experience in diverse environments. Among them backend practices in NodeJS and PHP (also a little Python with Django), and mostly Vue for the frontend. Together with Electron, I gained most of my experience in a large desktop application that I built myself and has been in production use for several years in a large NOC (Network Operations Center).',
	'If you want to learn more, or get in touch with me feel free to drop me a line via <a class="hover:text-primary underline underline-offset-2" href="https://www.linkedin.com/in/bastian-jakobs/" target="_blank">LinkedIn</a>.'
]

const logos = [
	'/img/logos/Windows_logo_-_2021.png',
	'/img/logos/linux_penguin.png',
	'/img/logos/favpng_kali-linux-backtrack-linux-distribution-offensive-security-certified-professional.png',
	'/img/logos/Android_robot.png',
	'/img/logos/Electron_Software_Framework_Logo.png',
	'/img/logos/kisspng-node-js-javascript-web-application-express-js.png',
	'/img/logos/Vue.js_Logo_2.png',
	'/img/logos/favpng_raspberry-pi-3-raspbian-computer-kodi.png'
]
</script>

<style scoped>
</style>
