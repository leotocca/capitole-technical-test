import Vuex from "vuex";

export default new Vuex.Store({
	state: {
		movies: [],
	},
	mutations: {
		setMovies(state, payload) {
			state.movies = payload;
		},
	},
	actions: {
		commitMovies({ state, commit }, payload) {
			commit("setMovies", payload);
		},
	},
});
