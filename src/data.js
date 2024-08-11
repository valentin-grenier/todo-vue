import { ref } from 'vue';

const tasks = ref([
	{
		title: 'Washing machine',
		completed: false,
		date: 1,
	},
	{
		title: 'Cooking',
		completed: false,
		date: 2,
	},
]);

export default tasks;
