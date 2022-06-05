<template>
	<div class="w-full pt-32 pb-20 bg-navy-100">
		<h1 class="my-32">TEST</h1>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {};
	},
	mounted() {
		console.log({ state: this.$store.state.movies });
	},
};
</script>
<style scoped></style>
