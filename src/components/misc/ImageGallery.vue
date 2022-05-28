<template>
	<!-- Image gallery -->
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
		<!-- Modal - for images -->
		<AppModal v-model="showModal" :image="image" />

		<img
			v-for="(img, index) in props.images"
			:key="index"
			:src="img"
			height="100%"
			class="card-image w-full h-48 object-cover rounded-lg drop-shadow-lg cursor-pointer transform transition duration-500 hover:object-scale-down hover:scale-150 hover:z-10"
			loading="lazy"
			@click="openImage(img)"
		>
	</div>
</template>

<script setup>
import AppModal from '@/components/misc/AppModal.vue'

// Props
const props = defineProps({
	images: {
		type: Array,
		required: true
	}
})

// Open image in modal
const image = ref('')
const showModal = ref(false)
const openImage = (src) => {
	image.value = src
	showModal.value = true
}

// Image loaded
// const onImgLoad = (index) => {
// console.log('image geloaded', index)
// document.getElementById(`img-${index}`).classList.remove('skeleton')
// // document.querySelector('.skeleton').classList.remove('skeleton')
// // @load="onImgLoad(index)"
// }
</script>
