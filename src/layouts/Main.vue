<template>
	<main>
		<div v-if="tasks.length === 0">
			<p>Please add some tasks! 😬</p>
		</div>

		<div v-else>
			<span>My tasks :</span>

			<ul v-for="task in sortedTasks">
				<li :key="task.date">
					<Task
						:task="task"
						@check="checkTask"
						@uncheck="uncheckTask"
					/>
				</li>
			</ul>

			<label id="hide-completed">
				<input type="checkbox" v-model="hideCompleted" />
				Hide completed tasks
			</label>
		</div>
	</main>
</template>

<script setup>
import { ref, computed } from 'vue';
import tasks from '../data';
import Task from '../components/Task.vue';

const tasksRef = ref(tasks.value);
const hideCompleted = ref(false);

const checkTask = (task) => {
	task.completed = true;
	tasksRef.value = [...tasksRef.value];
};

const uncheckTask = (task) => {
	task.completed = false;
	tasksRef.value = [...tasksRef.value];
};

const sortedTasks = computed(() => {
	const sortedTasks = tasksRef.value.slice().sort((a, b) => {
		if (a.completed === b.completed) {
			return 0;
		} else if (a.completed) {
			return 1;
		} else {
			return -1;
		}
	});

	if (hideCompleted.value) {
		return sortedTasks.filter((t) => !t.completed);
	}

	return sortedTasks;
});

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
	list-style: none;
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
