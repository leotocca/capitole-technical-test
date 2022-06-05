<template>
	<div class="w-full h-full pt-32 pb-20 bg-navy-100">
		<div class="container mx-auto">
			<div class="flex w-full">
				<div class="w-1/2">
					<img
						:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
						:alt="`${movie.title} - Poster image`"
						class="mx-auto"
					/>
				</div>
				<div class="w-1/2 mx-5 mt-10 text-blue-900">
					<h1 class="text-4xl">
						{{ movie.title }}
					</h1>

					<div class="w-full mt-8">
						<div class="flex">
							<div class="w-1/2">
								<p class="font-bold text-xl">
									Voters opinion:
									<span class="font-normal">{{ movie.vote_average }}</span>
								</p>
							</div>
							<div class="w-1/2">
								<p class="font-bold text-xl">
									Release date:
									<span class="font-normal">{{ movie.release_date }}</span>
								</p>
							</div>
						</div>
						<div class="w-full mt-5">
							<p class="font-bold text-xl">
								Genres:
								<span
									v-for="(genre, index) in movie.genres"
									:key="`genre-${index}`"
									class="font-normal inline-block ml-2"
									>{{ genre.name }}</span
								>
							</p>
						</div>
						<div class="w-full mt-5">
							<p class="font-bold text-xl">
								Production companies:
								<span
									v-for="(company, index) in movie.production_companies"
									:key="`company-${index}`"
									class="font-normal inline-block ml-2"
									>{{ company.name }}</span
								>
							</p>
						</div>
						<div class="w-full mt-5">
							<p class="font-bold text-xl">
								Production countries:
								<span
									v-for="(country, index) in movie.production_countries"
									:key="`country-${index}`"
									class="font-normal inline-block ml-2"
									>{{ country.name }}</span
								>
							</p>
						</div>
					</div>
					<button
						@click="handleAddToCart"
						class="w-52 font-bold text-center bg-red-500 px-4 py-2 border-2 border-red-500 text-white hover:bg-opacity-50 hover:text-white mt-10 transition-all duration-200 rounded-lg cursor-pointer"
					>
						{{ buttonText }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios";

export default {
	data() {
		return {
			movie: {},
			buttonText: "Add to Cart",
		};
	},
	methods: {
		handleAddToCart() {
			this.$store.dispatch("commitMovie", this.movie);
			this.buttonText = "Added to Cart!";
			setTimeout(() => {
				this.buttonText = "Add to Cart";
			}, 1500);
		},
	},
	async mounted() {
		try {
			const { data } = await axios.get(
				`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${
					import.meta.env.VITE_TMDB_API_KEY
				}`
			);

			this.movie = data;
		} catch (e) {
			console.error({ e });
		}
	},
};
</script>
<style scoped></style>
