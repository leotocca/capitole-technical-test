import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Category from "../pages/Category.vue";
import MovieDetail from "../pages/MovieDetail.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/about", component: About },
	{ path: "/category/:category", component: Category },
	{ path: "/movie-detail/:id", component: MovieDetail },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
