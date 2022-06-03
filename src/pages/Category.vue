<template>
	<div
		class="w-full pt-32 pb-20 bg-navy-100"
		:class="
			loading && movies.length === 0
				? 'h-screen flex items-center justify-center'
				: ''
		"
	>
		<div
			class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center"
		>
			<Movie
				v-for="(movie, index) in movies"
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
			movies: [],
			currentPage: 1,
			loading: false,
			SpinnerAnimation,
		};
	},
	methods: {
		async makeMovieRequest(page = 1) {
			this.loading = true;
			try {
				const {
					data: { results },
				} = await axios.get(
					`https://api.themoviedb.org/3/discover/movie?api_key=${
						import.meta.env.VITE_TMDB_API_KEY
					}&with_genres=${this.$route.params.category}&${
						page !== 1 ? `page=${page}` : ""
					}`
				);

				this.loading = false;
				this.movies = [...this.movies, ...results.slice(2)];
			} catch (e) {
				console.error({ e });
			}
		},
	},
	mounted() {
		this.makeMovieRequest();

		window.addEventListener("scroll", () => {
			let bottomOfWindow =
				Number((window.innerHeight + window.scrollY).toFixed()) >=
				Number(document.body.scrollHeight.toFixed());

			if (bottomOfWindow) {
				this.currentPage++;

				this.makeMovieRequest(this.currentPage);
			}
		});
	},
};
</script>
<style scoped></style>
