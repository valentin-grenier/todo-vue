<template>
	<main>
		<div v-if="tasks.length === 0">
			<p>Please add some tasks! 😬</p>
		</div>

		<div v-else>
			<span>My tasks :</span>

			<ul v-for="task in tasks">
				<Checkbox
					:task="task"
					:key="task.date"
					@check="updateTask(task, true)"
					@uncheck="updateTask(task, false)"
				/>
			</ul>
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';
import tasks from '../data';
import Checkbox from '../components/Checkbox.vue';

const tasksRef = ref(tasks.value);

const updateTask = (task, completed) => {
	const index = tasksRef.value.findIndex((t) => t.date === task.date);

	if (index !== -1) {
		tasksRef.value[index].completed = completed;
		tasks.value = tasksRef.value;
	}

	console.log(tasks.value[0]);
};
</script>

<style scoped>
main {
	background: rgb(223, 238, 248);
	padding: 1.5rem 1.25rem;
	border-radius: 0.75rem;
}

p {
	margin: 0;
	text-align: center;
	font-weight: bold;
	color: rgb(20, 94, 129);
}

ul {
	padding-left: 0.5rem;
}
</style>
