<template>
  <v-app class="transparent">
<div class="d-flex justify-space-between ">
  <MainMenu />
  <SubmitOrder
    v-if="true" 
    :loadData.sync="submitOrderData"
    :saveData="saveDataNewService"
  />
  <!-- <ServiceQualification />
  <Documents /> -->
</div>
  </v-app>
</template>

<style lang="scss">
@import "./sass/main.scss";
</style>

<script>
import MainMenu from '@/components/MainMenu.vue'
import SubmitOrder from '@/components/submitOrder/SubmitOrder'
  export default {
    name: 'App',
    components: {
      MainMenu,
      SubmitOrder,
      // ServiceQualification,
      // Documents
    },
    data: () => ({
      submitOrderData: null
    }),
    methods: {
      saveDataSubmitOrder (data) {
        this.submitOrderData = data.submitOrderData
      },
    }
  }
</script>