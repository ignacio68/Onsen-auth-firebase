export default {
  state: {
    loading: false,
    error: null
  },
  getters: {
    loading (state) { // Devuelve el estado del loading
      return state.loading
    },
    error (state) { // Devuelve el error
      return state.error
    }
  },
  mutations: {
    /* Controla el load */
    setLoading (state, payload) {
      state.loading = payload
      console.log('Loading es ' + state.loading)
    },
    /* Controla los errores */
    setError (state, payload) {
      state.error = payload
      console.log('el error es: ' + state.error.message)
    },
    /* Resetea los errores */
    clearError (state) {
      state.error = null
      console.log('Limpio el error')
    }
  },
  actions: {
    clearError ({commit}) {
      commit('clearError')
    }
  }
}
