<template>
  <v-ons-button
    class="social--button"
    modifier="large"
    ripple="true"
    @click="parentMethod(index, page)"
    >
    {{ name }}
  </v-ons-button>
</template>

<script>
  export default {
    name: 'social-button',
    props: {
      name: {
        type: String,
        default: ''
      },
      index: {
        type: Number,
        default: ''
      }
    },
    methods: {
      parentMethod (index, page) {
        this.$emit('socialButtonEvent', payload)
      }
    }
  }
</script>

<style scoped>
  .social--button {
    background-color: limegreen;
    margin-left: 10px;
    margin-rigth: 10px;
    padding-left: 10px;
  }
</style>
