<template>
  <v-ons-page>

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
    name: 'home',
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
</style>
