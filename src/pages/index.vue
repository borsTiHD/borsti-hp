<template>
    <div class="-mt-48">
        <!-- Profile with picture -->
        <section class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row pt-24">
                <!-- Picture - left side -->
                <figure><img src="~/assets/img/borsti_bw.png" :alt="`Photo of ${author}`" class="w-64 sm:w-96 max-w-sm rounded-lg drop-shadow-xl" loading="lazy"></figure>

                <!-- Introduction - right side -->
                <div class="mt-auto card bg-base-300 shadow-xl">
                    <div class="card-body">
                        <p class="text-primary font-montserrat font-bold my-5 text-lg lg:text-xl xl:text-2xl leading-tight uppercase">{{ introduction }}</p>
                        <h1 class="font-roboto text-5xl leading-none font-bold">{{ author }}</h1>
                        <h2 class="text-primary font-montserrat mb-10 text-xl lg:text-2xl xl:text-3xl leading-tight">{{ underline }}</h2>

                        <!-- About me -->
                        <blockquote class="p-2 mb-4 flex flex-col gap-6 bg-base-100 rounded-lg">
                            <p
                                v-for="(item, index) in descriptions"
                                :key="index"
                                class="font-montserrat leading-relaxed max-w-prose m-2"
                                v-html="item"
                            />
                        </blockquote>
                        <button class="btn btn-primary" @click="btnAboutMe">Know me ↴</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- More about me -->
        <section id="about-me" class="bg-base-300 p-4 lg:px-28 lg:py-10 flex justify-center">
            <div class="card bg-base-100 shadow-xl max-w-screen-xl">
                <div class="card-body">
                    <h2 class="card-title">About Me</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- Left side -->
                        <div class="flex flex-col gap-4 justify-between">
                            <!-- Text -->
                            <div class="mockup-code">
                                <div class="px-4 flex flex-col gap-4">
                                    <p
                                        v-for="(item, index) in moreAboutMe.slice(0, 2)"
                                        :key="index"
                                        class="font-roboto leading-relaxed"
                                        v-html="item"
                                    />
                                </div>
                            </div>
                            <!-- Logos -->
                            <div class="hidden lg:flex gap-4">
                                <div v-for="(logo, index) in logos.slice(0, 4)" :key="index" class="w-36 rounded-xl drop-shadow-md">
                                    <img :src="logo" alt="Tech Logo">
                                </div>
                            </div>
                        </div>

                        <!-- Right side -->
                        <div class="flex flex-col gap-4 justify-between">
                            <!-- Logos -->
                            <div class="hidden lg:flex gap-4">
                                <div v-for="(logo, index) in logos.slice(4)" :key="index" class="w-36 rounded-xl drop-shadow-md">
                                    <img :src="logo" alt="Tech Logo">
                                </div>
                            </div>
                            <!-- Text -->
                            <div class="mockup-code">
                                <div class="px-4 flex flex-col gap-4">
                                    <p
                                        v-for="(item, index) in moreAboutMe.slice(2)"
                                        :key="index"
                                        class="font-roboto leading-relaxed"
                                        v-html="item"
                                    />
                                </div>
                            </div>
                        </div>

                        <!-- Logos for mobile -->
                        <div class="flex lg:hidden gap-4 mt-10">
                            <div v-for="(logo, index) in logos" :key="index" class="w-36 rounded-xl drop-shadow-md">
                                <img :src="logo" alt="Tech Logo">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useAppStore } from '~/store/app'

// Changing title
const appStore = useAppStore()
const author = appStore.getAuthor
const pageTitle = `Home - ${appStore.getTitle}`
useHead({ title: pageTitle })

// About me button
const btnAboutMe = () => {
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
        'decoration-sky-500/80',
        'decoration-teal-500/80',
        'decoration-primary/80'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}

// Creates skill tag
const getSkill = (value, skill = undefined, color = undefined) => {
    return `<span class="font-roboto italic underline underline-offset-2 ${color || getRandomColor()} decoration-2">${skill || skills[value]}</span>`
}

// Introduction text
let counter = 0
const introduction = 'Hi, my name is'
const underline = 'Creator • YouTuber • GFX • Developer'
const descriptions = [
	`I'm a full-stack web developer from Germany, working as a software engineer at ${getSkill(false, 'Deutsche Telekom', 'decoration-magenta/80')}. I have the passion to make the web a beautiful place.`,
	`Building web and desktop apps since school. I have a diverse set of skills, ranging from ${getSkill(counter++)}, ${getSkill(counter++)}, ${getSkill(counter++)}, ${getSkill(counter++)} all the way to ${getSkill(counter++)}, ${getSkill(counter++)} and ${getSkill(counter++)}.`
]

// More about me
const linkedIn = 'https://www.linkedin.com/in/bastian-jakobs/'
const moreAboutMe = [
    'I\'ve always been involved in nerdy PC stuff, building my own computers, solving friends software and hardware problems, experimenting around with software and operating systems until you crashed the OS and had to reinstall everything. Modded consoles and tinkered with them and even didn\'t stop at the Dreambox (nowadays with the Raspberry Pi). You name it.',
    'The passion of software development started in the early Counter-Strike era when I founded a clan together with friends and developed my first static website for our clan page.',
    'Later in school I chose Android programming and dynamic websites (php + mysql) as electives. At that time I also made my first experiences with BackTrack (now known as Kali Linux) and cracked my parents WLAN with a netbook.',
    'And today I bring self-taught experience in diverse environments. Among them backend practices in NodeJS and PHP (also a little Python with Django), and mostly Vue for the frontend. Together with Electron, I gained most of my experience in a large desktop application that I built myself and has been in production use for several years in a large NOC (Network Operations Center).',
    `If you want to learn more, or get in touch with me feel free to drop me a line via <a class="link link-hover hover:text-primary underline underline-offset-2" href="${linkedIn}" target="_blank">LinkedIn</a>.`
]

// Tech logos
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
