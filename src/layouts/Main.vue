<template>
	<main>
		<div v-if="tasks.length === 0">
			<p>Please add some tasks! 😬</p>
		</div>

		<div v-else>
			<span>My tasks :</span>

			<ul v-for="task in sortTasks()">
				<Checkbox
					:task="task"
					:key="task.date"
					@check="updateTask(task, true)"
					@uncheck="updateTask(task, false)"
				/>
			</ul>

			<label id="hide-completed">
				<input type="checkbox" v-model="hideCompleted" />
				Hide completed tasks
			</label>
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';
import tasks from '../data';
import Checkbox from '../components/Checkbox.vue';

const tasksRef = ref(tasks.value);
const hideCompleted = ref(false);

const updateTask = (task, completed) => {
	const index = tasksRef.value.findIndex((t) => t.date === task.date);

	if (index !== -1) {
		tasksRef.value[index].completed = completed;
		tasks.value = tasksRef.value;
	}

	console.log(tasks.value[0]);
};

const sortTasks = () => {
	const sortedTasks = tasks.value.toSorted((a, b) => {
		if (a.completed === b.completed) {
			return 0;
		} else if (a.completed) {
			return 1;
		} else {
			return -1;
		}
	});

	if (hideCompleted.value === true) {
		return sortedTasks.filter((t) => !t.completed);
	}

	return sortedTasks;
};

const hideCompletedTasks = () => {
	return (tasks.value = tasks.value.filter((task) => !task.completed));
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

label#hide-completed {
	display: block;
	background: rgb(242, 249, 254);
	padding: 0.5rem;
	border-radius: 0.75rem;
	margin-top: 1.5rem;
	width: fit-content;
}
</style>
