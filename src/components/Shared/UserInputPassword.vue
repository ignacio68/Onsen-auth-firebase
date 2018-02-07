<template>
  <div class="Password">
    <v-ons-row>
      <div class="left">
        <div class="left">
          <v-ons-icon
            icon="ion-locked, md-lock"
            size="25px"
            class="list-item__icon"></v-ons-icon>
        </div>
      </div>
      <div class="center">
        <v-ons-input
          type="password"
          class="Password__Input"
          :value="value"
          ref="input"
          @input="updatePassword($event.target.value)"
          v-bind="$attrs"
          minlength="8"
          placeholder="componente contraseña"
          required
          modifier="float"
        ></v-ons-input>
      </div>
      <div class="left">
        <v-button
          class="Password__Toggle"
          @click="togglePassword"
        >
          <v-ons-icon
            class="Password__Togle_Icon"
            id="icon"
            icon="ion-eye-disabled, md-eye-off"
            size="36px"></v-ons-icon>
        </v-button>
      </div>
    </v-ons-row>
  </div>
</template>

<script>
  export default {
    name: "password",
    inheritAttrs: false,
    props: {
      value: {
        type: String,
        default: ''
      },
      userInputs: {
        type: Array,
        default () {
          return []
        }
      },
    },
    data () {
      return {
        type: 'password'
      }
    },
    computed: {
    },
    watch: {
      userInputs () {
        this.$emit('input', this.value, this.userInputs)
      }
    },
    methods: {
      togglePassword () {
        this.type = this.type === 'password' ? 'text' : 'password'
        this.$refs.input.setAttribute('type', this.type)
        this.$refs.input.value = 'caca de la vaca!'
        console.log('type =' + this.type)
        console.log(this.$refs.input.value)
      },
      updatePassword (password) {
        this.$emit('input', password, this.userInputs)
      }
    }
  }
</script>

<style scoped>
  .input-icon {
  }
</style>
