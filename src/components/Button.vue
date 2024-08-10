<template>
	<button :disabled="disabled"><slot></slot></button>
</template>

<script setup>
defineProps({
	disabled: Boolean,
});
</script>

<style scoped>
button {
	border: none;
	padding: 0rem 1rem;
	border-radius: 0.25rem;
}
</style>
