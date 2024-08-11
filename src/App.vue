<template>
	<div class="container">
		<Layout>
			<template v-slot:header></template>
			<template v-slot:main></template>
			<template v-slot:footer></template>
		</Layout>
	</div>
</template>

<script setup>
import Layout from './layouts/Layout.vue';
</script>

<style scoped>
* {
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
