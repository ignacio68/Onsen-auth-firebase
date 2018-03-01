<template>
  <v-ons-page>
    <v-ons-toolbar
     modifier="transparent cover-content noshadow">
      <div class="left">
        <v-ons-back-button></v-ons-back-button>
      </div>
      <div class="center">LOG IN</div>
    </v-ons-toolbar>
    <v-ons-list>
      <v-ons-list-item
        v-for="(socialButton, $index) in socialButtons" :key="socialButton.name" tappable>
        <social-button
          :name="socialButton.name"
          :index="$index"
          @socialButtonEvent="socialLogIn($event)"
        >
        </social-button>
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-button
      class="center"
      modifier="quiet"
      @click.native="onTerms">
      Términos del contrato
    </v-ons-button>
    <p>El usuario es: </p><h1>{{ userName }}</h1>
  </v-ons-page>
</template>

<script>
  import SocialButton from '../Shared/SocialButton'
  import Terms from './TermsConditions'
  import Init from '../App/Init'

  export default{
    name: 'signIn',
    components: {
      SocialButton
    },
    beforeCreate () {
      console.log('LogIn: beforeCreate')
      this.$store.dispatch('isActive', Init)
    },
    created () {
      console.log('LogIn:  created')
    },
    beforeMount () {
      console.log('LogIn:  beforeMount')
    },
    mounted () {
      console.log('LogIn:  mounted')
    },
    beforeUpdate () {
      console.log('LogIn: : beforeUpdate')
    },
    updated () {
      console.log('Configuration: updated')
    },
    beforeDestroy () {
      console.log('Configuration: beforeDestroy')
    },
    destroyed () {
      console.log('Configuration: destroyed')
    },
    data () {
      return {
        userName: ''
      }
    },
    watch: {
      if (isUser) {
        this.userName = user.displayName
        console.log('El suario es: ' + userName)
        this.$store.commit('push', Init)
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      socialButtons () {
        return this.$store.getters.socialButtonsVisible
      },
      isUser () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
    },
    methods: {
      onTerms () {
        this.$store.commit('push', Terms)
      },
      socialLogIn (index) {
        let socialProvider = this.socialButtons[index].socialLogIn
        this.$store.dispatch(socialProvider)
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
