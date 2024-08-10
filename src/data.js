import { ref } from 'vue';

const tasks = ref([
	{
		title: 'Wash',
		completed: true,
		date: Date.now(),
	},
]);

export default tasks;
