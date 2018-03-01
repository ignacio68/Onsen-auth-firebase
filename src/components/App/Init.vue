<template>
  <v-ons-page>
    <v-ons-toolbar
      modifier="transparent cover-content noshadow">
      <div class="left">
       <v-ons-back-button></v-ons-back-button>
      </div>
      <div class="center">PRINCIPAL</div>
    </v-ons-toolbar>

    <h5>Tu email es: </h5><h3>{{ myUser.name }}</h3>
    <h5>Tu contraseña es: </h5><h3>{{ myUser.password }}</h3>
    <v-ons-button @click="logOut">SALIR</v-ons-button>

  </v-ons-page>
</template>

<script>
  import Configuration from '../Configuration'

  export default {
    name: 'init',
    beforeCreate () {
      console.log('Init: beforeCreate')
    },
    created () {
      console.log('Init: created')
    },
    beforeMount () {
      console.log('Init: beforeMount')
    },
    mounted () {
      console.log('Init: mounted')
    },
    beforeUpdate () {
      console.log('Init: beforeUpdate')
    },
    updated () {
      console.log('Init: updated')
    },
    beforeDestroy () {
      console.log('Init: beforeDestroy')
    },
    destroyed () {
      console.log('Init: destroyed')
    },
    data () {
      return {
        myUser: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.user
      }
    },
    methods: {
      logOut () {
        this.$store.dispatch('signUserOut', Configuration)
      }
    }
  }
</script>

<style scoped>

</style>
