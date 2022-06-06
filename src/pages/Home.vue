<template>
	<div
		class="w-full flex flex-col items-center justify-center pt-32 pb-20 bg-navy-100"
	>
		<h1 class="text-2xl lg:text-4xl text-blue-900 text-center">
			Browse movies by category
		</h1>

		<div
			class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center items-center flex-wrap mt-8"
		>
			<div v-for="(category, index) in categories" :key="`category-${index}`">
				<category-button :category="category" />
			</div>
		</div>
		<most-seen-movies-of-the-week />
	</div>
</template>
<script>
import axios from "axios";
import mostSeenMoviesOfTheWeek from "../components/Universal/MostSeenMoviesOfTheWeek.vue";
import CategoryButton from "../components/Categories/CategoryButton.vue";

export default {
	data() {
		return {
			categories: [],
		};
	},
	components: {
		mostSeenMoviesOfTheWeek,
		CategoryButton,
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
