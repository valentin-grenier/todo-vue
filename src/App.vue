<template>
	<header>
		<h1>TodoList VueJS</h1>
	</header>

	<main>
		<form @submit.prevent="addTask">
			<input
				type="text"
				placeholder="Write your task..."
				v-model="newTask"
			/>
			<button :disabled="newTask.length === 0">Add</button>
		</form>

		<div class="tasks-list">
			<p v-if="tasks.length === 0" class="informative-text">
				Add some tasks 😎
			</p>

			<div v-else>
				<label id="hide-tasks">
					<input type="checkbox" v-model="hideCompleted" />
					Hide completed tasks
				</label>

				<ul>
					<li
						v-for="task in sortTasks()"
						:key="task.date"
						:class="{ completed: task.completed }"
					>
						<label>
							<input type="checkbox" v-model="task.completed" />
							{{ task.title }}
						</label>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';

const newTask = ref('');
const hideCompleted = ref(false);
const tasks = ref([
	{
		title: 'First task',
		completed: true,
		date: 1,
	},
	{
		title: 'Second task',
		completed: false,
		date: 2,
	},
]);

const addTask = () => {
	if (newTask.value.title === '') {
		console.error('Add a title!');
	} else {
		tasks.value.push({
			title: newTask.value,
			completed: false,
			date: Date.now(),
		});

		newTask.value = '';
	}
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
		return sortedTasks.filter((t) => t.completed === false);
	}

	return sortedTasks;
};

const hideCompletedTasks = () => {
	tasks.value = tasks.value.filter((task) => !task.completed);
};
</script>

<style scoped>
* {
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

header {
	background: #0b3d8d;
	color: #f1f1f1;
	padding: 1rem;
	text-align: center;
	width: 400px;
	margin: 0 auto 2rem;
	border-radius: 0.5rem;
}

form {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;
	margin: auto;
	margin-bottom: 2rem;
	background: rgb(160, 204, 235);
	width: 400px;
	padding: 1rem;
	border-radius: 0.5rem;
}

form input {
	width: 100%;
	border: none;
	padding: 0.5rem;
	border-radius: 0.4rem;
}

label#hide-tasks {
	display: block;
	background: rgb(201, 213, 222);
	padding: 0.5rem;
	margin-bottom: 1.5rem;
	border-radius: 0.25rem;
}

button {
	border: none;
	padding: 0.5rem 1.5rem;
	border-radius: 0.4rem;
	background: #0b3d8d;
	color: #fff;
	font-weight: 700;
	cursor: pointer;
}

button:disabled {
	opacity: 0.5;
}

.tasks-list {
	background: rgb(160, 204, 235);
	margin: auto;
	width: 400px;
	padding: 1rem;
	border-radius: 0.5rem;
}

.informative-text {
	text-align: center;
	font-weight: 700;
}

ul {
	list-style: none;
	margin-bottom: 1rem;
}

ul li:not(:last-of-type) {
	margin-bottom: 0.5rem;
}

ul li.completed {
	text-decoration: line-through;
	opacity: 0.5;
}
</style>
