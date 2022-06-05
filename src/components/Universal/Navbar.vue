<template>
	<nav class="w-full h-16 bg-white fixed z-50">
		<div class="container h-full mx-auto flex justify-between items-center">
			<div>
				<router-link class="font-extrabold text-xl text-blue-900" to="/"
					>The Movie Database App</router-link
				>
			</div>
			<div>
				<router-link
					class="font-bold text-lg text-blue-900 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500 transition-all duration-300 mr-7"
					to="/"
					>Search Movies</router-link
				>
				<router-link
					class="font-bold text-lg text-blue-900 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
					to="/categories"
					>Browse by category</router-link
				>
			</div>
		</div>
	</nav>
</template>
<script>
export default {};
</script>
