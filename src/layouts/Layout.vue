<template>
	<div class="container">
		<Header :tasks="tasks" />
		<Main :tasks="tasks" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './Header.vue';
import Main from './Main.vue';

const tasks = ref([
	{
		title: 'My task',
	},
]);
</script>

<style scoped>
.container {
	width: 400px;
	margin: auto;
}
</style>
