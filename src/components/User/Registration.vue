<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button></v-ons-back-button>
      </div>
      <div class="center">Registro</div>
    </v-ons-toolbar>

    <div class="container">
      <!--app-alert @dismissed="onDismissed" :text="error.massage"></app-alert-->
      <!-- Mensaje de alerta cuando ocurre un error-->
      <!--div class="alerta">
        <div class="alerta-texto" v-if="error">
           <p>{{ error.message}}</p>
        </div>
      </div>
      <!-- Toast de alerta cuando ocurre un error-->
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
                icon="ion-person, zmdi-account"
                size="30px"
                class="list-item__icon">
              </v-ons-icon>
            </div>
            <div class="center">
              <v-ons-input
                type="name"
                placeholder="usuario"
                float
                modifier="transparent"
                v-model="name"
                @click="onDismissed"
                required
              >
              </v-ons-input>
            </div>
          </v-ons-list-item>
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
              minlength="8"
              placeholder="componente contraseña"
              required
              modifier="float"
              v-model="password"
            >
            </user-input-password>
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
                float
                modifier="transparent"
                v-model="confirmPassword"
                @click="comparePasswords"
                required
              >
              </v-ons-input>
              <div class="left">
                <v-ons-icon
                  class="rigth"
                  id="icon"
                  icon="ion-eye-disabled, md-eye-off"
                  size="30px">
                </v-ons-icon>
              </div>
            </div>
          </v-ons-list-item>
        </v-ons-list>
        <v-ons-button
          class="center"
          modifier="large"
          :disabled="loading"
          ripple="true"
          @click="onSignUp"
        >
          Registrar
        </v-ons-button>
      </form>
    </div>

    <v-ons-button
      class="center"
      modifier="quiet"
      @click.prevent="onTerms">
      Términos del Servicio
    </v-ons-button>
  </v-ons-page>
</template>

<script>
  import Init from '../App/Init'
  import Terms from './TermsConditions'
  import UserInputPassword from '../Shared/UserInputPassword'

  export default{
    name: 'registration',
    components: {
      UserInputPassword
    },
    data () {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'El password no es el mismo' : ''
      },
      user () {
        return this.$store.getters.user // recupera la información del user desde el state
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
      onSignUp () {
        console.log('Estoy en onSignUp')
        this.$store.dispatch('signUserUp', {name: this.name, email: this.email, password: this.password})
      },
      onTerms () {
        this.$store.commit('push', Terms) // Se carga la página de Términos del Contrato
      },
      // Una vez abierta la alerta se borran los errores
      onDismissed () {
        console.log('estoy en onDismissed!!')
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

<style scoped>

  .alerta {
    margin-top: 0px;
    height: 50px;
  }
  .alerta-texto {
    height: 100%;
    text-align: center;
    padding-top: 1px;
    color: white;
    background-color: red;
  }
</style>
