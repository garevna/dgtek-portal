<template>
  <v-app class="transparent">
<v-container>
  <v-row>
    <v-col cols="4">
      <MainMenu />
    </v-col> 
    <v-col cols="8">
    <SubmitOrder
      v-if="true" 
      :loadData.sync="submitOrderData"
      :saveData="saveDataSubmitOrder"
    /> 
    </v-col>
  <!-- <ServiceQualification />
  <Documents /> -->
  </v-row>
</v-container>
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
      if (!this.submitOrderData) this.submitOrderData = {}
        this.submitOrderData = data.submitOrderData
      },
    }
  }
</script>