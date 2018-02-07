<template>
    <v-ons-list-item class="user-input">
      <div class="left">
        <v-ons-icon
          :icon="userInputIcon"
          class="input-icon"
        ></v-ons-icon>
      </div>
      <div class="center">
        <v-ons-input
          :type="userInputType"
          :placeholder="userInputPlaceholder"
          modifier="transparent underbar"
          required
         ></v-ons-input>
       </div>
    </v-ons-list-item>
</template>

<script>
  export default {
    props: {
      userInputIcon: {
        type: String
      },
      userInputType: {
        type: String
      },
      userInputPlaceholder: {
        type: String
      }
    }
  }
</script>

<style scoped>
  .user-input {

  }
  .input-icon {
    size: 30px;
  }
</style>
