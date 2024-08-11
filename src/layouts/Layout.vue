<template>
	<div class="container">
		<button @click="showTimer = !showTimer">
			{{ showTimer ? 'Hide timer' : 'Show timer' }}
		</button>
		<Timer v-if="showTimer" />
		<Header />
		<Main :tasks="tasks" />
		<Footer />
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Header from './Header.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
import Timer from '@/components/Timer.vue';

const tasks = ref([]);
const showTimer = ref(true);

onMounted(() => {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then((r) => r.json())
		.then(
			(v) => (tasks.value = v.map((task) => ({ ...task, date: task.id })))
		);
});
</script>

<style scoped>
.container {
	width: 400px;
	margin: auto;
}
</style>
