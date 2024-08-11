<template>
	<label :class="task.completed ? 'checked' : ''">
		<input type="checkbox" :checked="task.completed" @change="onChange" />
		{{ task.title }}
	</label>
</template>

<script setup>
const props = defineProps({
	task: Object,
});

const emit = defineEmits(['check', 'uncheck']);

const onChange = (event) => {
	const isChecked = event.currentTarget.checked;

	if (isChecked) {
		emit('check', props.task);
	} else {
		emit('uncheck', props.task);
	}
};
</script>

<style scoped>
.checked {
	text-decoration: line-through;
	opacity: 0.5;
}
</style>
