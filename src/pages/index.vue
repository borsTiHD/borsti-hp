<template>
    <div class="-mt-24">
        <section class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <!-- Picture - left side -->
                <figure><img src="~/assets/img/borsti_bw.png" :alt="`Photo of ${author}`" class="max-w-sm rounded-lg drop-shadow-xl" loading="lazy"></figure>

                <!-- Text - right side -->
                <div>
                    <!-- Introduction -->
                    <figcaption>
                        <div class="card bg-base-300 shadow-xl">
                            <div class="card-body">
                                <p class="text-primary font-montserrat font-bold my-5 text-lg lg:text-xl xl:text-2xl leading-tight uppercase">{{ introduction }}</p>
                                <h1 class="font-roboto text-5xl leading-none font-bold">{{ author }}</h1>
                                <h2 class="text-primary font-montserrat mb-10 text-xl lg:text-2xl xl:text-3xl leading-tight">{{ underline }}</h2>

                                <!-- About me -->
                                <blockquote class="bg-base-100 rounded-lg p-2 mb-4">
                                    <p
                                        v-for="(item, index) in descriptions"
                                        :key="index"
                                        class="font-montserrat leading-relaxed max-w-prose m-2"
                                        :class="index !== (descriptions.length - 1) ? 'mb-6' : ''"
                                        v-html="item"
                                    />
                                </blockquote>

                                <button class="btn btn-primary" @click="btnAboutMe">Know me ↴</button>
                            </div>
                        </div>
                    </figcaption>
                </div>
            </div>
        </section>
        <section id="about-me" class="bg-base-300 p-10">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
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
    return `<a class="font-roboto italic underline underline-offset-2 ${color || getRandomColor()} decoration-2">${skill || skills[value]}</a>`
}

// Introduction text
let counter = 0
const introduction = 'Hi, my name is'
const underline = 'Creator • YouTuber • GFX • Developer'
const descriptions = [
	`I'm a full-stack web developer from Germany, working as a software engineer at ${getSkill(false, 'Deutsche Telekom', 'decoration-magenta/80')}. I have the passion to make the web a beautiful place.`,
	`Building web and desktop apps since school. I have a diverse set of skills, ranging from ${getSkill(counter++)}, ${getSkill(counter++)}, ${getSkill(counter++)}, ${getSkill(counter++)} all the way to ${getSkill(counter++)}, ${getSkill(counter++)} and ${getSkill(counter++)}.`
]
</script>
