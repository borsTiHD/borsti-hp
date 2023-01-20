<template>
    <div class="-mt-24">
        <section class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <figure><img src="~/assets/img/borsti_bw.png" :alt="`Photo of ${name}`" class="max-w-sm rounded-lg drop-shadow-xl" loading="lazy"></figure>
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
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
const pageTitle = `Home - ${appStore.getTitle}`
useHead({ title: pageTitle })

const name = 'Bastian Jakobs'
</script>
