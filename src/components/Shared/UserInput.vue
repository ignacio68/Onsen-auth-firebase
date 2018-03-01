<template>
  <div class="userInput" v-if="disableInput">
    <div class="left">
      <v-ons-icon
        :icon="iconInput"
        class="input-icon"
      ></v-ons-icon>
    </div>
    <div class="center">
      <v-ons-input
        :type="typeInput"
        :placeholder="placeholderInput"
        modifier="float"
        required
      ></v-ons-input>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      disableInput: {
        type: Boolean,
        default: false
      },
      iconInput: {
        type: String,
        default: ''
      },
      typeIinput: {
        type: String,
        default: 'text'
      },
      placeholderInput: {
        type: String,
        default: 'playholder'
      }
    }
  }
</script>

<style scoped>
  .input-icon {
    size: 30px;
  }
</style>
