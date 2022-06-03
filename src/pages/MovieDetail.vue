<template>
	<div
		class="w-full h-screen flex flex-col items-center justify-center bg-navy-100"
	>
		<h1 class="text-4xl font-bold underline text-red-700">
			{{ movieData.title }}
		</h1>
	</div>
</template>
<script>
import axios from "axios";

export default {
	data() {
		return {
			movieData: {},
		};
	},
	async mounted() {
		try {
			const { data } = await axios.get(
				`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${
					import.meta.env.VITE_TMDB_API_KEY
				}`
			);

			console.log({ data });

			this.movieData = data;
		} catch (e) {
			console.error({ e });
		}
	},
};
</script>
<style scoped></style>
