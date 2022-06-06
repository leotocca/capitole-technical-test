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
				<div class="w-1/2 mx-5 mt-6 text-blue-900">
					<h1 class="text-4xl">
						{{ movie.title }}
					</h1>

					<div class="w-full mt-8">
						<div class="flex">
							<div class="w-1/2">
								<p class="font-bold text-xl">
									Voters opinion:
									<span class="font-normal text-base">{{
										movie.vote_average
									}}</span>
								</p>
							</div>
							<div class="w-1/2">
								<p class="font-bold text-xl">
									Release date:
									<span class="font-normal text-base">{{
										movie.release_date
									}}</span>
								</p>
							</div>
						</div>
						<div class="w-full mt-5">
							<p class="font-bold text-xl">
								Duration:
								<span class="font-normal text-base">{{ movie.runtime }}</span>
							</p>
						</div>
						<div class="w-full mt-5">
							<p class="font-bold text-xl">Genres:</p>
							<p class="mt-3">{{ movieGenres }}</p>
						</div>
						<div class="w-full mt-5">
							<p class="font-bold text-xl">Production companies:</p>
							<p class="mt-3">{{ productionsCompanies }}</p>
						</div>
						<div class="w-full mt-5">
							<p class="font-bold text-xl">Production countries:</p>
							<p class="mt-3">{{ productionsCountries }}</p>
						</div>
						<div class="w-full mt-5">
							<p class="font-bold text-xl">Overview:</p>
							<p class="mt-3">{{ movie.overview }}</p>
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
	computed: {
		movieGenres() {
			if (this.movie.genres) {
				const parsedCompanies = this.movie.genres.map((genre, index) => {
					if (index !== this.movie.genres.length - 1) {
						return `${genre.name},`;
					} else {
						return genre.name;
					}
				});

				return parsedCompanies.join(" ");
			}
		},
		productionsCompanies() {
			if (this.movie.production_companies) {
				const parsedCompanies = this.movie.production_companies.map(
					(company, index) => {
						if (index !== this.movie.production_companies.length - 1) {
							return `${company.name},`;
						} else {
							return company.name;
						}
					}
				);

				return parsedCompanies.join(" ");
			}
		},
		productionsCountries() {
			if (this.movie.production_countries) {
				const parsedCompanies = this.movie.production_countries.map(
					(country, index) => {
						if (index !== this.movie.production_countries.length - 1) {
							return `${country.name},`;
						} else {
							return country.name;
						}
					}
				);

				return parsedCompanies.join(" ");
			}
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
