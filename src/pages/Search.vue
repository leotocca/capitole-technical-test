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
			v-if="searchResultsMovies.length === 0"
			class="container mx-auto flex flex-col justify-center items-center"
		>
			<h1>Search Movies</h1>
			<p>{{ searchInput }}</p>
			<form v-on:submit="makeSearchRequest" class="w-full flex items-center">
				<input v-model="searchInput" type="text" />
				<button type="submit">Search</button>
			</form>
		</div>
		<div
			v-if="searchResultsMovies.length !== 0"
			class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center"
		>
			<h1>Search Results:</h1>
			<Movie
				v-for="(movie, index) in searchResultsMovies"
				:key="`movie-${index}`"
				:title="movie.title"
				:imgPath="movie.poster_path"
				:movieId="movie.id"
				:value="movie.vote_average"
			/>
		</div>
		<div class="container mx-auto flex flex-col items-center justify-center">
			<h3>Top 3 most seen movies of the week:</h3>
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mt-10"
			>
				<Movie
					v-for="(movie, index) in mostSeenMoviesOfTheWeek"
					:key="`movie-${index}`"
					:title="movie.title"
					:imgPath="movie.poster_path"
					:movieId="movie.id"
					:value="movie.vote_average"
				/>
			</div>
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
			mostSeenMoviesOfTheWeek: [],
			currentPage: 1,
			searchInput: "",
			loading: false,
			SpinnerAnimation,
		};
	},
	methods: {
		async makeSearchRequest(e) {
			e.preventDefault();

			const parsedSearchTerm = this.searchInput.split(" ").join("+");

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
