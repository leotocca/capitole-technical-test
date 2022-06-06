<template>
	<div
		class="h-full w-full pt-32 pb-20 bg-navy-100"
		:class="moviesInState.length <= 2 ? 'md:h-screen' : 'h-full'"
	>
		<div class="container mx-auto">
			<h1 class="text-blue-900 text-2xl lg:text-4xl mb-10">
				Current movies in Cart
			</h1>
			<div v-if="moviesInState.length === 0">
				<h3 class="text-blue-900 text-lg lg:text-xl">
					You don't have any movie in your cart at the moment.
					<router-link to="/" class="text-blue-500 inline hover:text-blue-900"
						>Browse through our catalog</router-link
					>
					to add them to your cart.
				</h3>
			</div>
			<div v-else class="flex flex-col items-end">
				<div
					v-for="(movie, index) in moviesInState"
					:key="`movie-${index}`"
					class="w-full border-t border-gray-400 flex text-blue-900 p-4 first:border-t-0"
				>
					<div>
						<img
							:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
							:alt="`${movie.title} - Poster image`"
							class="mx-auto h-32 w-auto"
						/>
					</div>
					<div class="w-full ml-10 flex items-center">
						<div class="flex-grow">
							<h3 class="font-bold">{{ movie.title }}</h3>
							<p>Voters opinion: {{ movie.vote_average }}</p>
						</div>
						<div class="mx-4 cursor-pointer" @click="deleteMovie(movie)">
							<DeleteIcon />
						</div>
					</div>
				</div>
				<button
					disabled
					class="border border-gray-700 bg-gray-500 text-gray-700 rounded px-10 py-3 font-bold mt-8 cursor-not-allowed"
				>
					Go to checkout
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import DeleteIcon from "../components/Svgs/DeleteIcon.vue";

export default {
	components: {
		DeleteIcon,
	},
	data() {
		return {};
	},
	computed: {
		moviesInState() {
			return this.$store.state.movies;
		},
	},
	methods: {
		deleteMovie(movie) {
			this.$store.dispatch("deleteMovie", movie);
		},
	},
	mounted() {
		console.log({ state: this.$store.state.movies });
	},
};
</script>
<style scoped></style>
