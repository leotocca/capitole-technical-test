<template>
	<div
		class="w-full h-full flex flex-col items-center justify-center pt-32 pb-20 bg-navy-100"
	>
		<search-form />
		<most-seen-movies-of-the-week />
	</div>
</template>
<script>
import axios from "axios";
import mostSeenMoviesOfTheWeek from "../components/Universal/MostSeenMoviesOfTheWeek.vue";
import SearchForm from "../components/Home/SearchForm.vue";

export default {
	data() {
		return {
			categories: [],
		};
	},
	components: {
		mostSeenMoviesOfTheWeek,
		SearchForm,
	},
	async mounted() {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${
				import.meta.env.VITE_TMDB_API_KEY
			}`
		);
		this.categories = data.genres;
	},
};
</script>
<style scoped></style>
