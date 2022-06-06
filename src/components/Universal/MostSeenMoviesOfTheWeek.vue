<template>
	<div
		class="container mx-auto flex flex-col items-center justify-center mt-20"
	>
		<h3 class="text-blue-900 text-2xl lg:text-4xl text-center">
			Top 3 most seen movies of the week:
		</h3>
		<div
			class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mt-6"
		>
			<Vue3Lottie
				v-if="loading"
				:animationData="SpinnerAnimation"
				:height="400"
				:width="400"
			/>
			<Movie
				v-else
				v-for="(movie, index) in mostSeenMoviesOfTheWeek"
				:key="`movie-${index}`"
				:title="movie.title"
				:imgPath="movie.poster_path"
				:movieId="movie.id"
				:value="movie.vote_average"
			/>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import Movie from "../Categories/Movie.vue";
import Vue3Lottie from "vue3-lottie";
import SpinnerAnimation from "../Lottie/spinner.json";
export default {
	components: {
		Movie,
		Vue3Lottie,
	},
	data() {
		return {
			mostSeenMoviesOfTheWeek: [],
			loading: false,
			SpinnerAnimation,
		};
	},
	methods: {
		async requestMostSeenMoviesOfTheWeek() {
			try {
				const {
					data: { results },
				} = await axios.get(
					`https://api.themoviedb.org/3//trending/movie/week?api_key=${
						import.meta.env.VITE_TMDB_API_KEY
					}`
				);

				this.mostSeenMoviesOfTheWeek = results.slice(0, 3);
			} catch (e) {
				console.error({ e });
			}
		},
	},
	mounted() {
		this.requestMostSeenMoviesOfTheWeek();
	},
};
</script>
