<template>
	<header>
		<h1>Todo Vue</h1>
		<Form v-model="newTask" @add-task="handleNewTask" />
	</header>
</template>

<script setup>
import { ref } from 'vue';
import Form from '../components/Form.vue';

const props = defineProps({
	tasks: Array,
});

const newTask = ref('');

const emit = defineEmits(['add-task']);

// Fonction pour réémettre l'événement vers le parent
const handleNewTask = (task) => {
	emit('add-task', task);
};
</script>

<style scoped>
header {
	background: rgb(20, 94, 129);
	margin: 1rem 0 1.5rem;
	padding: 1rem 1.25rem;
	border-radius: 1rem;
}

h1 {
	color: white;
	text-align: center;
	margin-bottom: 1rem;
}
</style>
