<template>
	<div class="bg-black/10 dark:bg-white/10 flex flex-col rounded-lg p-4 my-4">
		<!-- Image - only renders if img is given -->
		<img
			v-if="img"
			:src="props.img"
			height="100%"
			:class="[
				'card-image w-full h-48 object-cover rounded-lg drop-shadow-lg',
				imageHover ? 'hover:object-scale-down' : ''
			]"
			loading="lazy"
		>

		<!-- Header - only renders if slot is given -->
		<h1 v-if="hasHeaderSlot" class="card-header font-roboto text-3xl md:text-4xl my-2">
			<slot name="header" />
		</h1>

		<!-- Content - Default slot -->
		<div class="card-content">
			<slot />
		</div>

		<!-- Footer - If slot is given -->
		<div v-if="hasFooterSlot" class="card-footer mt-auto">
			<AppDivider />
			<slot name="footer" />
		</div>
	</div>
</template>

<script setup>
import { useSlots } from 'vue'
import AppDivider from '@/components/misc/AppDivider.vue'
const slots = useSlots()

// Checking if slots are given
const hasHeaderSlot = !!slots.header
const hasFooterSlot = !!slots.footer

// Props
const props = defineProps({
	img: {
		type: [String, Boolean],
		default: false
	},
	imageHover: {
		type: Boolean,
		default: false
	}
})
</script>
