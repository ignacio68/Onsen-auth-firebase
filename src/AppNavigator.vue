<template id="App">
  <v-ons-navigator
    :page-stack="pageStack"
    :pop-page="storePop"
    :options="options"
  ></v-ons-navigator>
</template>

<script>
  import Home from './components/Home.vue'

  export default {
    beforeCreate () {
      this.$store.commit('push', Home)
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
