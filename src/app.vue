<template>
	<div>
		<AppNavbar />
		<div class="hero min-h-screen bg-base-400 py-8 pt-32 -mt-24">
			<div class="hero-content flex-col lg:flex-row">
				<img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl">
				<div>
					<h1 class="text-5xl font-bold">Box Office News!</h1>
					<p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
		<div class="p-10">
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
		</div>
	</div>
</template>

<script setup>
import '@fontsource/roboto'
import '@fontsource/roboto/700.css'
import '@fontsource/montserrat'

import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>