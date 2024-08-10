<template>
	<form @submit.prevent="addTask">
		<input
			type="text"
			placeholder="Write your todo here..."
			v-model="task"
		/>

		<Button :disabled="task.length === 0">Add</Button>
	</form>

	localTask: {{ localTask }}
</template>

<script setup>
import { ref, watch } from 'vue';
import Button from './Button.vue';

const task = defineModel();
const props = defineProps({
	modelValue: String,
});

const emit = defineEmits(['update:modelValue', 'add-task']);

const localTask = ref(props.modelValue);

const addTask = () => {
	if (localTask.value.trim()) {
		emit('add-task', localTask);
		localTask.value = '';
	}
};
</script>

<style scoped>
form {
	display: flex;
	justify-content: space-between;
	gap: 0.5rem;
}
input {
	flex: 1;
	height: 100%;
	border: none;
	border-radius: 0.25rem;
	padding: 0.5rem 1rem;
}
</style>
