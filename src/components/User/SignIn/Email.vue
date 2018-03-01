<template>
  <v-ons-page>
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
        <v-ons-list @click="onDismissed">
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
            <div class="left">
              <v-ons-icon
                icon="ion-locked, md-lock"
                size="30px"
                class="list-item__icon">
              </v-ons-icon>
            </div>
            <div class="center">
              <v-ons-input
                type="password"
                placeholder="contraseña"
                minlength="8"
                modifier="float"
                v-model="password"
                required
              >
              </v-ons-input>
            </div>
          </v-ons-list-item>
        </v-ons-list>
        <v-ons-button
          class="center btn-large"
          modifier="large"
          ripple="true"
          @click="onSignIn">
          REGISTRARSE
        </v-ons-button>
      </form>
    </div>
    <v-ons-button
      class="center"
      modifier="quiet"
      @click.prevent="nuevaCuenta">
      No tienes una cuenta?
    </v-ons-button>
  </v-ons-page>
</template>

<script>
  import Init from '../App/Init'

  export default{
    name: 'signIn',
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
          this.$store.commit('push', Init)
        }
      }
    },
    methods: {
      onSignIn() {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onDismissed() {
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
