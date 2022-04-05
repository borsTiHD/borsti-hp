<template>
	<div class="flex flex-col justify-center">
		<div class="grid grid-cols-2 gap-20">
			<div class="float-left">
				<img src="/assets/img/borsti_bw.png" alt="" class="w-full h-auto object-cover rounded-lg" loading="lazy">
			</div>
			<div class="my-4">
				<div class="text-white text-4xl font-bold self-center">{{ name }}</div>
				<div class="text-primary text-sm">{{ headline }}</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const name = 'Bastian Jakobs'
const headline = 'Writer . YouTuber . Creator . Mentor'
</script>
