<template>
  <v-container class="d-flex justify-center mt-8">
    <MainMenu :submitOrderPopup.sync="submitOrderPopup" class="mt-4 menu-tab"/>
    <SubmitOrder
      v-if="true"
      :data.sync="submitOrderData"
      :close.sync="submitOrderPopup"
    />
  </v-container>
</template>

<style lang="scss">
h1 {
  text-align: center;
}
</style>

<script>

import '@/sass/main.scss'

export default {
  name: 'Submit',
  components: {
    MainMenu: () => import('@/components/MainMenu.vue'),
    SubmitOrder: () => import('@/components/submitOrder/SubmitOrder')
  },
  data: () => ({
    submitOrderData: null,
    submitOrderPopup: true
  }),
  methods: {}
}
</script>
