<template>
	<div class="w-full h-screen flex flex-col items-center justify-center">
		<h1 class="text-sm font-bold underline text-red-700">
			{{ msg }}
		</h1>
	</div>
</template>
<script>
export default {
	props: {
		msg: String,
	},
};
</script>
<style scoped>
a {
	color: #42b983;
}
</style>
