import * as firebase from 'firebase'

export default {
  state: {
    user: null // el usuario inicial siempre está vacio
  },
  mutations: {
    setUser (state, newUser) {
      state.user = newUser
    }
  },
  actions: {
    signUserUp ({commit}, user) { // Creamos un nuevo usuario
      console.log('Estoy en signUserUp')
      commit('setLoading', true)
      commit('clearError')
      /* Crea el usuario en Firebase */
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid
            }
            commit('setUser', newUser)
            console.log('Hay un nuevo usuario: ' + newUser.email)
          }
        )
        .catch(
          error => {
            console.log('Estoy en el catch de errores de signUserUp')
            commit('setLoading', false)
            commit('setError', error)
          }
        )
    },
    signUserIn ({commit}, user) { // Login de usuario
      commit('setLoading', true)
      commit('clearError')
      /* Comprueba que el usuario existe en Firebase */
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    }
  },
  getters: {
    user (state) {
      return state.user // devuelve el usuario desde el state
    }
  }
}
