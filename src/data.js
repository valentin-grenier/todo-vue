import { ref } from 'vue';

const tasks = ref([
	{
		title: 'Washing machine',
		completed: true,
		date: Date.now(),
	},
	{
		title: 'Cooking',
		completed: false,
		date: Date.now(),
	},
]);

export default tasks;
