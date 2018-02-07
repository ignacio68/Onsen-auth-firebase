<template>
  <div class="userInput">
    <div class="left">
      <v-ons-icon
        icon="ion-email, md-email"
        class="input-icon"
      ></v-ons-icon>
    </div>
    <div class="center">
      <v-ons-input
        type="email"
        placeholder="componente email"
        modifier="float"
        required
      ></v-ons-input>
    </div>
  </div>
</template>

<script>
  export default {
   }
</script>

<style scoped>
  .input-icon {
    size: 30px;
  }
</style>
