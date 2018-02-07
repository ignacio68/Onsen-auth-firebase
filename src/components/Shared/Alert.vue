<template>
  <v-ons-page>
    <v-ons-dialog
      :visible.sync="isVisible"
      @prehide="onClose"
      >
      {{ text }}
      <v-ons-button
        @click="onClose">
        Cerrar
      </v-ons-button>
    </v-ons-dialog>
  </v-ons-page>
</template>

<script>
  export default {
    props: ['text'],
    data () {
      return {
        isVisible: true
      }
    },
    methods: {
      onClose () {
        this.isVisible = false
        this.$emit('dismissed')
        console.log('evento lanzado desde el componente-hijo')
      }
    }
  }
</script>

<style scoped>

</style>
