<template>
	<footer :class="tasksToComplete.length === 0 ? 'all-done' : ''">
		<div v-if="tasksToComplete.length === 0">
			<p><strong>🎉 You have completed all your tasks!</strong></p>
		</div>

		<div v-else>
			<p>
				⏳ You have
				<strong
					>{{ tasksToComplete.length }}
					{{ tasksToComplete.length > 1 ? 'tasks' : 'task' }}</strong
				>
				to complete
			</p>
		</div>
	</footer>
</template>

<script setup>
import { computed } from 'vue';
import tasks from '../data';

const tasksToComplete = computed(() => tasks.value.filter((t) => !t.completed));
</script>

<style scoped>
footer {
	background: rgb(248, 235, 223);
	padding: 1.25rem;
	border-radius: 0.75rem;
	margin-bottom: 1.5rem;
}

footer.all-done {
	background: rgb(231, 248, 223);
	color: rgb(47, 102, 22);
}

p {
	margin: 0;
}
</style>
