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
import tasks from '../data';
import Button from './Button.vue';

const newTask = ref('');

const addTask = () => {
	if (newTask.length === 0) {
		console.error('Add a task!');
		return;
	} else {
		tasks.value.push({
			title: newTask.value,
			completed: false,
			date: Date.now(),
		});
		newTask.value = '';
	}
};
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
