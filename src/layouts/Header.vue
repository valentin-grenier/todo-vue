<template>
	<header>
		<h1>Todo Vue</h1>
		<Form />
	</header>
</template>

<script setup>
import Form from '../components/Form.vue';
</script>

<style scoped>
header {
	background: rgb(20, 94, 129);
	margin: 1rem 0 1.5rem;
	padding: 1.5rem 1.25rem;
	border-radius: 0.75rem;
}

h1 {
	color: white;
	text-align: center;
	margin: 0 0 1rem;
}
</style>
