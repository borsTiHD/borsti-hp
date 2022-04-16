<template>
	<button
		:class="[
			'shadow focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded',
			buttonTypes[props.type],
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

const props = defineProps({
	type: {
		type: String,
		default: 'primary'
	},
	uppercase: {
		type: Boolean,
		default: false
	}
})
</script>
