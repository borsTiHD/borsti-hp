<template>
	<!-- Image gallery -->
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
		<!-- Modal - for images -->
		<AppModal
			v-model="showModal"
			:image="activeImage"
			gallery-mode
			@next-image="nextImage"
			@previous-image="previousImage"
		/>

		<img
			v-for="(img, index) in props.images"
			:key="index"
			:src="img"
			height="100%"
			class="card-image w-full h-48 object-cover rounded-lg drop-shadow-lg cursor-pointer transform transition duration-500 hover:object-scale-down hover:scale-150 hover:z-10"
			loading="lazy"
			@click="openImage(index)"
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
const activeImage = ref('')
const activeIndex = ref(0)
const showModal = ref(false)
const openImage = (index) => {
	const img = props.images[index]
	activeIndex.value = index
	activeImage.value = img
	showModal.value = true
}

// Next image
const nextImage = () => {
	const nextIndex = activeIndex.value + 1
	if (nextIndex < props.images.length) {
		openImage(nextIndex)
	} else {
		openImage(0)
	}
}

// Previous image
const previousImage = () => {
	const previousIndex = activeIndex.value - 1
	if (previousIndex >= 0) {
		openImage(previousIndex)
	} else {
		openImage(props.images.length - 1)
	}
}

// Image loaded
// const onImgLoad = (index) => {
// console.log('image geloaded', index)
// document.getElementById(`img-${index}`).classList.remove('skeleton')
// // document.querySelector('.skeleton').classList.remove('skeleton')
// // @load="onImgLoad(index)"
// }
</script>
