import * as firebase from 'firebase'

export default {
  state: {
    user: null // el usuario inicial siempre está vacio
  },
  getters: {
    user (state) {
      return state.user // devuelve el usuario desde el state
    }
  },
  mutations: {
    setUser (state, newUser) {
      state.user = newUser // Añade a user las propiedades del usuario registrado
    },
    clearUser (state) {
      state.user = null
    }
  },
  actions: {
    signUserUp ({commit}, user) { // Registramos un nuevo usuario con password
      console.log('Estoy en signUserUp')
      commit('setLoading', true)
      commit('clearError')
      /* Crea el usuario en Firebase */
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid //añadimos a user el id del usuario en Firebase
            }
            commit('setUser', newUser) // Llamamos a la mutacion 'setUser' para añadir nuevas propiedades al user
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
    signUserIn ({commit}, user) { // Login de usuario ya registrado con password
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
    },
    signUserOut ({commit}, page) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signOut()
        .then(
          result => {
            commit('setLoading', false)
            commit('clearUser')
            commit('clearSocialButtonsVisible')
            commit('push', page)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    isActive ({commit}, page) {
      /*
      firebase.auth().onAuthStateChanged(
        user => {
          if (user) {
            commit('push', page)
          } else {
            console.log('No hay ningún usuario conectado')
          }
        }
      ) */
      const activeUser = firebase.auth().currentUser
      if (activeUser != null) {
        commit('push', page)
      } else {
        console.log('No hay ningún usuario conectado')
      }
    }
  }
}
