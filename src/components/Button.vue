<template>
	<button :disabled="newTask.length === 0">
		<slot></slot>
	</button>
</template>

<script setup>
const newTask = defineModel();
</script>

<style scoped>
button {
	border: none;
	border-radius: 0.25rem;
	padding: 0.25rem 1rem;
	background: white;
	font-weight: bold;
}
</style>
