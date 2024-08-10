<template>
	<div class="taskslist">
		<div v-if="tasks.length === 0">
			<p>Please add some tasks 😬</p>
		</div>

		<div v-else>
			<h2>My tasks</h2>
			<ul v-for="task in tasks">
				<li>{{ task.title }}</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
defineProps({
	tasks: Array,
});
</script>

<style scoped>
.taskslist {
	background: rgb(210, 224, 231);
	padding: 1rem 1.25rem;
	border-radius: 1rem;
}

h2 {
	font-size: 1.25rem;
	margin-bottom: 1rem;
}

ul {
	margin-left: 1.25rem;
}
</style>
