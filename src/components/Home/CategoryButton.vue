<template>
	<button
		class="inline-flex items-center px-6 py-3 text-sm sm:text-base mr-4 bg-red-500 border border-transparent rounded-md font-bold text-white capitalize tracking-widest hover:bg-red-100 active:bg-red-900 focus:outline-none focus:border-red-900 focus:ring focus:ring-red-300 disabled:opacity-25 transition"
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
