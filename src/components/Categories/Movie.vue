<template>
	<div
		class="w-[320px] h-[400px] relative group mx-5 my-5 cursor-pointer overflow-hidden transition-all duration-300"
	>
		<div
			class="w-full h-full bg-center bg-contain bg-no-repeat"
			:style="{
				'background-image': `url(https://image.tmdb.org/t/p/w500/${imgPath})`,
			}"
		></div>
		<div
			class="absolute top-0 left-0 px-10 w-full h-full translate-y-full group-hover:translate-y-0 group-hover:bg-gray-700 group-hover:bg-opacity-70 transition-all duration-300"
		>
			<div class="w-full h-full relative">
				<h3
					class="absolute inset-x-0 top-40 text-xl text-white text-center font-bold"
				>
					{{ title }}
				</h3>
				<button
					class="absolute inset-x-0 bottom-10 font-bold text-center bg-white px-4 py-2 border border-white text-gray-700 hover:bg-transparent hover:text-white mt-5 transition-all duration-200 rounded-lg"
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
	},
};
</script>
