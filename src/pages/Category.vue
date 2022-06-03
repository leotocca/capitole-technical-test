<template>
	<div
		class="w-full flex flex-wrap items-center justify-center pt-32 pb-20 bg-navy-100"
	>
		<Movie
			v-for="(movie, index) in movies"
			:key="`movie-${index}`"
			:title="movie.title"
			:imgPath="movie.poster_path"
		/>
	</div>
</template>
<script>
import axios from "axios";
import Movie from "../components/Categories/Movie.vue";

export default {
	components: {
		Movie,
	},
	data() {
		return {
			movies: [],
		};
	},
	async mounted() {
		try {
			const {
				data: { results },
			} = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${
					import.meta.env.VITE_TMDB_API_KEY
				}&with_genres=${this.$route.params.category}`
			);
			// console.log({ data });
			this.movies = results.slice(2);
		} catch (e) {
			console.error({ e });
		}
	},
};
</script>
<style scoped></style>
