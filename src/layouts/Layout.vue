<template>
	<div class="container">
		<Header />
		<Main />
		<Footer />
	</div>
</template>

<script setup>
import Header from './Header.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
</script>

<style scoped>
.container {
	width: 400px;
	margin: auto;
}
</style>
