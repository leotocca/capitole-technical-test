<template>
	<div
		class="w-[267px] h-[400px] mx-auto relative group my-8 overflow-hidden transition-all duration-300"
	>
		<img
			:src="`https://image.tmdb.org/t/p/w500/${imgPath}`"
			:alt="title"
			class="h-full w-full"
		/>
		<div
			class="absolute top-0 left-0 px-10 w-full h-full translate-y-full group-hover:translate-y-0 group-hover:bg-blue-900 group-hover:bg-opacity-70 transition-all duration-300"
		>
			<div class="w-full h-full relative">
				<div class="absolute inset-x-0 top-28 text-white text-center font-bold">
					<h3 class="text-xl">{{ title }}</h3>
					<p class="text-lg mt-3">{{ value }}</p>
				</div>
				<button
					@click="handleClick"
					class="absolute inset-x-0 bottom-16 font-bold text-center bg-red-500 px-4 py-2 border-2 border-red-500 text-white hover:bg-opacity-50 hover:text-white mt-5 transition-all duration-200 rounded-lg cursor-pointer"
				>
					View More
				</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: String,
		imgPath: String,
		movieId: Number,
		value: Number,
	},
	methods: {
		handleClick() {
			this.$router.push(`/movie-detail/${this.movieId}`);
		},
	},
};
</script>
