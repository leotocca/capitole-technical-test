<template>
	<Navbar />
	<router-view></router-view>
</template>
<script>
import Navbar from "./components/Universal/Navbar.vue";
export default {
	components: {
		Navbar,
	},
};
</script>
