<template>
	<div class="h-full lg:h-screen w-full pt-32 pb-20 bg-navy-100">
		<div class="container mx-auto">
			<h1 class="text-blue-900 text-2xl lg:text-4xl mb-10">
				Current movies in Cart
			</h1>
			<div class="w-full border-t border-b border-gray-600 flex text-blue-900">
				<div>IMAGE</div>
				<div class="w-full ml-4 flex items-center">
					<div class="flex-grow">
						<h3>Movie title</h3>
						<p>Voters opinion: 7.3</p>
					</div>
					<div class="mx-4 cursor-pointer"><DeleteIcon /></div>
				</div>
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
	mounted() {
		console.log({ state: this.$store.state.movies });
	},
};
</script>
<style scoped></style>
