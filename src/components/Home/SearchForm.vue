<template>
	<div class="container mx-auto flex flex-col justify-center items-center">
		<h1>Search Movies</h1>
		<p>{{ searchInput }}</p>
		<form
			v-on:submit="redirectToSearchResultsPage"
			class="w-full flex items-center"
		>
			<input v-model="searchQuery" type="text" />
			<button type="submit">Search</button>
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
