import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Cart from "../pages/Cart.vue";
import Search from "../pages/Search.vue";
import Category from "../pages/Category.vue";
import MovieDetail from "../pages/MovieDetail.vue";
import SearchResults from "../pages/SearchResults.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/cart", component: Cart },
	{ path: "/search", component: Search },
	{ path: "/category/:category", component: Category },
	{ path: "/movie-detail/:id", component: MovieDetail },
	{ path: "/search-results/:searchQuery", component: SearchResults },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
