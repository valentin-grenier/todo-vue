<template>
	<header>
		<h1>TodoList VueJS</h1>
	</header>

	<main>
		<form @submit.prevent="addTask">
			<input
				type="text"
				placeholder="Write your task..."
				v-model="newTask.title"
			/>
			<button>Add</button>
		</form>

		<div class="tasks-list">
			<p v-if="tasks.length === 0" class="informative-text">
				Add some tasks 😎
			</p>

			<div v-else>
				<ul>
					<li v-for="task in tasks" :key="task">
						<input
							type="checkbox"
							@click="completeTask(task)"
							v-model="task.completed"
						/>
						<span :class="{ completed: task.completed }">
							{{ task.title }}
						</span>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';

const tasks = ref([]);

const newTask = ref({
	title: '',
	completed: false,
	date: null,
});

const addTask = () => {
	if (newTask.value.title === '') {
		console.error('Add a title!');
	} else {
		const date = new Date().toJSON().slice(0, 10).split('-').join('');
		tasks.value.push({
			title: newTask.value.title,
			completed: false,
			date: date,
		});

		newTask.value = {
			title: '',
			completed: false,
			date: null,
		};
	}
};

const completeTask = (task) => {
	task.completed = !task.completed;
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

form button {
	border: none;
	padding: 0.5rem 1.5rem;
	border-radius: 0.4rem;
	background: #0b3d8d;
	color: #fff;
	font-weight: 700;
	cursor: pointer;
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
}

ul li:not(:last-of-type) {
	margin-bottom: 0.5rem;
}

ul li span {
	display: inline-block;
	margin-left: 0.5rem;
}

ul li span.completed {
	text-decoration: line-through;
	opacity: 0.5;
}
</style>
