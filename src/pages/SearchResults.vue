<template>
	<div
		class="w-full flex flex-col item-center justify-center pt-32 pb-20 bg-navy-100"
	>
		<h3 class="text-blue-900 text-2xl text-center">Search results:</h3>
		<div
			v-if="searchResultsMovies.length !== 0"
			class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mt-10"
		>
			<Movie
				v-for="(movie, index) in searchResultsMovies"
				:key="`movie-${index}`"
				:title="movie.title"
				:imgPath="movie.poster_path"
				:movieId="movie.id"
				:value="movie.vote_average"
			/>
		</div>
		<div v-if="loading" class="w-full justify-center">
			<Vue3Lottie
				:animationData="SpinnerAnimation"
				:height="400"
				:width="400"
			/>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import Movie from "../components/Categories/Movie.vue";
import Vue3Lottie from "vue3-lottie";
import SpinnerAnimation from "../components/Lottie/spinner.json";

export default {
	components: {
		Movie,
		Vue3Lottie,
	},
	data() {
		return {
			searchResultsMovies: [],
			loading: false,
			SpinnerAnimation,
		};
	},
	methods: {
		async makeSearchRequest() {
			const parsedSearchTerm = this.$route.params.searchQuery
				.split(" ")
				.join("+");

			try {
				const {
					data: { results },
				} = await axios.get(
					`https://api.themoviedb.org/3/search/movie?api_key=${
						import.meta.env.VITE_TMDB_API_KEY
					}&query=${parsedSearchTerm}`
				);

				this.searchResultsMovies = results;
			} catch (e) {
				console.error({ e });
			}
		},
	},
	mounted() {
		this.makeSearchRequest();
	},
};
</script>
