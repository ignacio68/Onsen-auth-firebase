<template id="App">
  <v-ons-navigator
    :page-stack="pageStack"
    :pop-page="storePop"
    :options="options"
  ></v-ons-navigator>
</template>

<script>
  import Configuration from './components/Configuration'

  export default {
    name: 'appNavigator',
    beforeCreate () {
      this.$store.commit('push', Configuration)
    },
    data () {
      return {
      }
    },
    computed: {
      pageStack () {
        return this.$store.getters.pageStack
      },
      options () {
        return this.$store.getters.options
      }
    },
    methods: {
      storePop () {
        this.$store.commit('pop')
      }
    }
  }
</script>

<style>

</style>
