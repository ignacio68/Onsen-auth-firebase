import * as firebase from 'firebase'

export default {
  state: {
    socialButtons: [
      { name: 'Email', socialLogIn: 'onEmailIn', isVisible: false },
      { name: 'Facebook', socialLogIn: 'onFacebookIn', isVisible: false },
      { name: 'Google +', socialLogIn: 'onGoogleIn', isVisible: false },
      { name: 'Twitter', socialLogIn: 'onTwitterIn', isVisible: false },
      { name: 'GitHub', socialLogIn: 'onGitHubIn', isVisible: false },
      { name: '0Auth', socialLogIn: 'on0AuthIn', isVisible: false }
    ],
    socialButtonsVisible: [],
    errorMessage: ''
  },
  getters: {
    socialButtons (state) {
      return state.socialButtons
    },
    socialButtonsVisible (state) {
      return state.socialButtonsVisible
    }
  },
  mutations: {
    // Cambia el estado de visibilidad de los botones
    isVisible (state, index) {
      console.log('la aplicación es ' + state.socialButtons[index].name)
      state.socialButtons[index].isVisible = !state.socialButtons[index].isVisible
      console.log('la aplicación es visible? ' + state.socialButtons[index].isVisible)
    },
    // Agregamos al array 'socialButtonsVisible' los botones visibles
    socialButtonsVisible (state) {
      const len = state.socialButtons.length

      for (let i = 0; i < len; i++) {
        if (state.socialButtons[i].isVisible === true) {
          state.socialButtonsVisible.push(state.socialButtons[i])
        }
      }
    },
    // Reseteamos socialButtons.isVisible a "false"
    resetSocialButtons (state) {
      const len = state.socialButtons.length

      for (let i = 0; i < len; i++) {
        state.socialButtons[i].isVisible = false
        console.log (state.socialButtons[i].name + ' es ' + state.socialButtons[i].isVisible)
      }
    },
    // Reseteamos el array socialButtonsVisible
    clearSocialButtonsVisible (state) {
      state.socialButtonsVisible = []
    },
    /**
     * Manejo de los errores de autenticación
     * Terminar de completar y sacar a otro módulo
      */
     authError (state, errorCode) {
      switch (errorCode) {
        case 'auth/credential-already-in-use' :
          state.message = 'Ya existe un usuario con esta cuenta'
          break
        case 'auth/email-already-in-use' :
          state.message = 'Ya existe un usuario con el mismo email'
          break
        case 'auth/operation-not-allowed' :
          state.message = 'Este tipo de cuentas no esta habilitada'
          break
        default :
          state.message = errorCode
      }
      console.log('el error en la autorización es:' + state.message)
    }
  },
  actions: {
    /**
     * Acciones para autenticar segun el social login elegido
     * Posibilidad de separalo en módulos para mejorar la claridad
     * del software
     * @param commit
     */
    onEmailIn ({commit}) {
      console.log('Estoy en onEmailIn')
      // this.$store.push('Init')
    },
    onFacebookIn ({commit}) {
      console.log('Estoy en onFacebookIn')
      commit('setLoading', true)
      commit('clearError')
      const provider = new firebase.auth.FacebookAuthProvider()
      provider.addScope('public_profile')
      firebase.auth().useDeviceLanguage()
      firebase.auth().signInWithPopup(provider) // Utilizamos esta forma de acceso en producción
      // firebase.auth().signInWithRedirect(provider)
      // firebase.auth().getRedirectResult()
        .then(
          result => {
            commit('setLoading', false)
            if (result.credential) {
              // Accedemos al Facebook Access Token, ahora podemos utilizarlo para acceder a la Facebook API
              let token = result.credential.accessToken
              // console.log('El token es: ' + token)
            }
            // Informacion del user
            const newUser = {
              name: result.user.displayName,
              email: result.user.email,
              id: result.user.uid
            }
            commit('setUser', newUser)
            console.log(newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            // commit('setError', error)
            let errorCode = error.code
            commit('authError', errorCode)
            console.log(errorCode)
          }
        )
    },
    onGoogleIn ({commit}) {
      console.log('Estoy en onGoogleIn')
      commit('setLoading', true)
      commit('clearError')
      const provider = new firebase.auth.GoogleAuthProvider()
      // provider.addScope()
      firebase.auth().useDeviceLanguage()
      firebase.auth().signInWithRedirect(provider)
        .then(function (result) {
          if (result.credential) {
            // Accedemos al Google Access Token, ahora podemos utilizarlo para acceder a la Facebook API
            let token = result.credential.accessToken
          }
          // Informacion del user
          let user = result.user
        })
        .catch(function(error) {
          let errorCode = error.code
          let errorMessage = error.mesage
        })
    },
    onTwitterIn ({commit}) {
      console.log('Estoy en onTwitterIn')
      commit('setLoading', true)
      commit('clearError')
      const provider = new firebase.auth.TwitterAuthProvider()
      // provider.addScope ()
      firebase.auth().useDeviceLanguage()
      firebase.auth().signInWithRedirect(provider)
      firebase.auth().getRedirectResult()
        .then(function (result) {
          if (result.credential) {
            // Accedemos al Facebook Access Token, ahora podemos utilizarlo para acceder a la Facebook API
            let token = result.credential.accessToken
          }
          // Informacion del user
          let user = result.user
        })
        .catch(function(error) {
          let errorCode = error.code
          let errorMessage = error.mesage
        })
    },
    onGitHubIn ({commit}) {
      console.log('Estoy en onGitHubIn')
      commit('setLoading', true)
      commit('clearError')
      const provider = new firebase.auth.GithubAuthProvider()
      // provider.addScope ()
      firebase.auth().useDeviceLanguage()
      firebase.auth().signInWithRedirect(provider)
      firebase.auth().getRedirectResult()
        .then(function (result) {
          if (result.credential) {
            // Accedemos al Facebook Access Token, ahora podemos utilizarlo para acceder a la Facebook API
            let token = result.credential.accessToken
          }
          // Informacion del user
          let user = result.user
        })
        .catch(function(error) {
          let errorCode = error.code
          let errorMessage = error.mesage
        })
    },
    on0AuthIn ({commit}) {
      console.log('Estoy en on0AuthIn')
      commit('setLoading', true)
      commit('clearError')
    }
  }
}
