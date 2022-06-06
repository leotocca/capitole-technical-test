import Vuex from "vuex";

export default new Vuex.Store({
	state: {
		movies: [],
	},
	mutations: {
		addMovie(state, payload) {
			state.movies = [...state.movies, payload];
		},
		updateState(state, payload) {
			state.movies = payload;
		},
	},
	actions: {
		commitMovie({ state, commit }, payload) {
			if (state.movies.findIndex((movie) => movie.id === payload.id) === -1) {
				commit("addMovie", payload);
			}
		},
		deleteMovie({ state, commit }, payload) {
			const filteredState = state.movies.filter(
				(movie) => movie.id !== payload.id
			);
			commit("updateState", filteredState);
		},
	},
});
