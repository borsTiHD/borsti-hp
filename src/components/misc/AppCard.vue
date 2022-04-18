<template>
	<div class="bg-black/10 dark:bg-white/10 rounded-lg p-4 my-4">
		<!-- Header - only renders if slot is given -->
		<h1 v-if="hasHeaderSlot">
			<slot name="header" />
		</h1>

		<!-- Content - Default slot -->
		<slot />
	</div>
</template>

<script setup>
import { useSlots } from 'vue'
const slots = useSlots()

// Test if has header slot
const hasHeaderSlot = !!slots.header
</script>
