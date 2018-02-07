<template>
  <v-ons-page @click="onDismissed">
    <v-ons-toolbar>
      <div class="center">Log In</div>
    </v-ons-toolbar>
    <div class="container">
      <div class="toast-alerta" v-if="error">
        <v-ons-toast
          visible
          animation="fall">
          {{ error.message }}
        </v-ons-toast>
      </div>
        <form>
          <v-ons-list>
             <v-ons-list-item :modifier="md ? 'nodivider' : ''">
              <div class="left">
                <v-ons-icon
                  icon="ion-email, md-email"
                  size="30px"
                  class="list-item__icon">
                </v-ons-icon>
              </div>
              <div class="center">
                  <v-ons-input
                    type="email"
                    placeholder="email"
                    required
                    float
                    modifier="underbar"
                    v-model="email"
                  >
                  </v-ons-input>
              </div>
            </v-ons-list-item>
            <v-ons-list-item :modifier="md ? 'nodivider' : ''">
              <user-input-password
                v-model="password"></user-input-password>
            </v-ons-list-item>
            <v-ons-list-item :modifier="md ? 'nodivider' : ''">
              <user-input></user-input>
            </v-ons-list-item>
          </v-ons-list>
          <v-ons-button
            class="center btn-large"
            modifier="large"
            :disable="loading"
            ripple="true"
            @click="onSignIn">
            Entrar
          </v-ons-button>
        </form>
    </div>
    <v-ons-button
      class="center"
      modifier="quiet"
      @click.prevent="nuevaCuenta">
      No tienes una cuenta?
    </v-ons-button>
    <v-ons-button
      class="center"
      modifier="quiet"
      @click.prevent="onTerms">
      Términos del contrato
    </v-ons-button>
  </v-ons-page>
</template>

<script>
  import Main from '../App/Main'
  import Terms from './TermsConditions'
  import Registration from './Registration'
  import UserInput from '../Shared/UserInput'
  import UserInputPassword from '../Shared/UserInputPassword'

  export default{
    components: {
      UserInput,
      UserInputPassword
    },
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    // Si todos los valores introducidos están correctos,cargamos la página principal de la aplicación
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$store.commit('push', Main)
        }
      }
    },
    methods: {
      onSignIn () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onTerms () {
        this.$store.commit('push', Terms)
      },
      nuevaCuenta () {
        this.$store.commit('push', Registration)
      },
      onDismissed () {
        console.log('estoy en onDismissed!!')
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

<style scoped>
  .btn-large {
    margin-left: 5%;
    margin-bottom: 5px;
    width: 90%;
  }
</style>
