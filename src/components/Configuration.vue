<template>
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Configuracion</div>
      </v-ons-toolbar>
      <v-ons-list>
        <v-ons-list-header>
          LOG IN
        </v-ons-list-header>
        <ons-list-item v-for="(logInOption, $index) in logInOptions" :key="logInOption.name" tappable>
          <label class="left">
            <v-ons-checkbox
              :input-id="'checkbox-' + $index"
              :value="logInOption.name"
              @click="isVisible($index)"
             >
            </v-ons-checkbox>
            <label
              class="center checkbox--label"
              :for="'checkbox-' + $index"
              :value="logInOption.name">
              {{ logInOption.name }}
            </label>
          </label>
        </ons-list-item>
      </v-ons-list>
      <v-ons-list>
        <v-ons-list-header>
          REGISTRO
        </v-ons-list-header>
      </v-ons-list>
      <v-ons-list>
        <v-ons-list-header>
          PERFIL
        </v-ons-list-header>
      </v-ons-list>
      <v-ons-button
        class="btn-large"
        modifier="large"
        ripple
        @click="onComplete"
      >Continuar</v-ons-button>
    </v-ons-page>
</template>

<script>
  import SignIn from './User/SignIn.vue'

  export default {
    name: 'configuration',
    beforeCreate () {
      console.log('Configuration: beforeCreate')
      this.$store.commit('clearSocialButtonsVisible')
      this.$store.commit('resetSocialButtons')
    },
    created () {
      console.log('Configuration: created')
    },
    beforeMount () {
      console.log('Configuration: beforeMount')
    },
    mounted () {
      console.log('Configuration: mounted')
    },
    beforeUpdate () {
      console.log('Configuration: beforeUpdate')
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
      }
    },
    computed: {
      logInOptions () {
        return this.$store.getters.socialButtons
      }
    },
    methods: {
      onComplete () {
        this.$store.commit('socialButtonsVisible')
        this.$store.commit('push', SignIn)
      },
      isVisible (index) {
        console.log('Ha elegido la red social ' + index)
        this.$store.commit('isVisible', index)
      }
    }
  }
</script>

<style scoped>
  .checkbox--label {
    padding-left: 20px;
  }
</style>
