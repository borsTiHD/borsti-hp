<template>
	<div class="bg-black/10 dark:bg-white/10 flex flex-col rounded-lg p-4 my-4">
		<!-- Image - only renders if img is given -->
		<img v-if="img" :src="props.img" height="100%" class="card-image w-full h-48 object-cover hover:object-scale-down rounded-lg drop-shadow-lg" loading="lazy">

		<!-- Header - only renders if slot is given -->
		<h1 v-if="hasHeaderSlot" class="card-header font-roboto text-3xl md:text-4xl my-2">
			<slot name="header" />
		</h1>

		<!-- Content - Default slot -->
		<div class="card-content">
			<slot />
		</div>

		<!-- Footer - If slot is given -->
		<div v-if="hasFooterSlot" class="card-footer">
			<div class="border-t border-gray-400 dark:border-gray-500 pt-2 mt-2" />
			<slot name="footer" />
		</div>
	</div>
</template>

<script setup>
import { useSlots } from 'vue'
const slots = useSlots()

// Checking if slots are given
const hasHeaderSlot = !!slots.header
const hasFooterSlot = !!slots.footer

// Props
const props = defineProps({
	img: {
		type: [String, Boolean],
		default: false
	}
})
</script>
