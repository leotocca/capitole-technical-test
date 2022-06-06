<template>
	<div class="container mx-auto flex flex-col justify-center items-center">
		<h1 class="text-blue-900 text-2xl lg:text-4xl">Search Movies</h1>
		<p>{{ searchInput }}</p>
		<form
			v-on:submit="redirectToSearchResultsPage"
			class="w-full flex flex-col items-center mt-8"
		>
			<input v-model="searchQuery" type="text" class="w-11/12 md:w-1/2 p-2" />
			<button
				type="submit"
				class="w-40 font-bold text-center bg-red-500 px-4 py-2 border-2 border-red-500 text-white hover:bg-opacity-50 hover:text-white mt-5 transition-all duration-200 rounded-lg cursor-pointer"
			>
				Search
			</button>
		</form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			searchQuery: "",
		};
	},
	methods: {
		redirectToSearchResultsPage(e) {
			e.preventDefault();
			this.$router.push({ path: `/search-results/${this.searchQuery}` });
		},
	},
};
</script>
