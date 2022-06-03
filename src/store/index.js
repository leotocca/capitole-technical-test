import Vuex from "vuex";

export default new Vuex.Store({
	state: {
		movie: [],
	},
	mutations: {
		addMovie(state, payload) {
			state.movie = [...state.movie, payload];
		},
	},
	actions: {
		commitMovie({ state, commit }, payload) {
			if (state.movie.findIndex((movie) => movie.id === payload.id) === -1) {
				commit("addMovie", payload);
			}
		},
	},
});
