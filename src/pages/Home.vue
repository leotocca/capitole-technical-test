<template>
	<div
		class="w-full h-screen flex flex-col items-center justify-center pt-32 pb-20 bg-navy-100"
	>
		<h1 class="text-4xl font-bold underline text-red-700">
			Browse movies by category
		</h1>

		<div class="w-full flex justify-center items-center flex-wrap">
			<div v-for="(category, index) in categories" :key="`category-${index}`">
				<category-button :category="category" />
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios";

import CategoryButton from "../components/Home/CategoryButton.vue";

export default {
	data() {
		return {
			categories: [],
		};
	},
	components: {
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
