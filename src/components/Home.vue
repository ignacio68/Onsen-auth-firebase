<template>
  <v-ons-page>
    <h1>Home Page</h1>
    <v-ons-button
      class="btn-large"
      modifier="large"
      ripple
      @click.prevent="onLogIn"
    >Log In</v-ons-button>
    <v-ons-button
      class="center"
      modifier="quiet"
      @click.prevent="nuevaCuenta">
      ¿Necesitas una cuenta?
    </v-ons-button>
  </v-ons-page>
</template>

<script>
  import SignIn from './User/SignIn.vue'
  import Registration from './User/Registration.vue'

  export default {
    methods: {
      onLogIn () {
        this.$store.commit('push', SignIn)
      },
      nuevaCuenta () {
        this.$store.commit('push', Registration)
      }
    }
  }
</script>

<style scoped>
 .btn-large {
   margin-left: 5%;
   margin-bottom: 5px;
   width: 90%;
   background-color: #e91e63
 }
</style>
