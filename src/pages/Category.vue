<template>
	<div class="w-full pt-32 pb-20 bg-navy-100">
		<div
			class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center"
		>
			<Movie
				v-for="(movie, index) in movies"
				:key="`movie-${index}`"
				:title="movie.title"
				:imgPath="movie.poster_path"
				:movieId="movie.id"
			/>
		</div>
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
			currentPage: 1,
		};
	},
	methods: {
		async makeMovieRequest(page = 1) {
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

				this.movies = [...this.movies, ...results.slice(2)];
			} catch (e) {
				console.error({ e });
			}
		},
	},
	mounted() {
		this.makeMovieRequest();

		window.onscroll = () => {
			let bottomOfWindow =
				document.documentElement.scrollTop + window.innerHeight ===
				document.documentElement.offsetHeight;

			if (bottomOfWindow) {
				this.currentPage++;

				this.makeMovieRequest(this.currentPage);
			}
		};
	},
};
</script>
<style scoped></style>
