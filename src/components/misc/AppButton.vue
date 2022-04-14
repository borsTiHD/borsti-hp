<template>
	<button
		:class="[
			'shadow focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded',
			buttonTypes[props.type]
		]"
		type="button"
	>
		<slot />
	</button>
</template>

<script setup>
const buttonTypes = {
	primary: 'bg-primary hover:bg-rose-400',
	success: 'bg-green-600 hover:bg-green-500'
}

defineProps({
	type: {
		type: String,
		default: 'primary'
	}
})
</script>
