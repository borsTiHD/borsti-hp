<template>
	<button
		:class="[
			'shadow focus:shadow-outline focus:outline-none text-white rounded',
			buttonTypes[props.type],
			buttonSizes[props.size],
			props.uppercase ? 'uppercase' : 'normal-case'
		]"
		type="button"
	>
		<slot />
	</button>
</template>

<script setup>
const buttonTypes = {
	primary: 'bg-primary-light dark:bg-primary hover:bg-rose-400 dark:hover:bg-rose-400',
	success: 'bg-green-600 hover:bg-green-500'
}

const buttonSizes = {
	default: 'py-2 px-4',
	small: 'py-1 px-2 text-sm'
}

const props = defineProps({
	type: {
		type: String,
		default: 'primary'
	},
	size: {
		type: String,
		default: 'default'
	},
	uppercase: {
		type: Boolean,
		default: false
	}
})
</script>
