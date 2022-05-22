<template>
	<div class="flex flex-wrap justify-end gap-2 mt-4 md:mt-2">
		<span class="self-end">Tags:</span>
		<span v-for="(topic, i) in props.topics" :key="i" class="self-end">
			<NuxtLink :to="npmLink(topic)" class="text-primary-light dark:text-primary hover:text-rose-400 dark:hover:text-rose-300" target="_blank">{{ topic }}</NuxtLink>
			<span v-if="props.topics.length > i + 1">,</span>
		</span>
	</div>
</template>

<script setup>
const props = defineProps({
	topics: {
		type: Array,
		default: () => []
	}
})

// Generating Npm Search link
const npmLink = (topic) => useNpmSearch(topic)
</script>
