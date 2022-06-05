<template>
	<button
		class="inline-flex items-center px-6 py-3 text-lg mx-5 mt-5 bg-red-500 rounded-md font-bold border-2 border-red-500 text-white capitalize tracking-widest hover:bg-opacity-70 transition-all duration-300"
		@click="redirectUser"
	>
		{{ category.name }}
	</button>
</template>
<script>
export default {
	props: {
		category: Object,
	},
	methods: {
		redirectUser() {
			this.$router.push({ path: `/category/${this.category.id}` });
		},
	},
};
</script>
