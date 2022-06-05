import Vuex from "vuex";

export default new Vuex.Store({
	state: {
		movies: [],
	},
	mutations: {
		addMovies(state, payload) {
			state.movies = [...state.movies, payload];
		},
	},
	actions: {
		commitMovies({ state, commit }, payload) {
			if (state.movies.findIndex((movie) => movie.id === payload.id) === -1) {
				commit("addMovies", payload);
			}
		},
	},
});
