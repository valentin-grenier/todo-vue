<template>
	<form @submit.prevent="addTask">
		<input
			type="text"
			placeholder="What's your today todo?"
			v-model="newTask"
		/>
		<Button v-model="newTask">Add task</Button>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';

const newTask = ref('test');
</script>

<style scoped>
form {
	display: flex;
	gap: 0.5rem;
}

input {
	border: none;
	border-radius: 0.25rem;
	padding: 0.5rem;
	flex: 1;
}

input::placeholder {
	color: #00000050;
}
</style>
