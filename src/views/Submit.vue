<template>
  <v-container class="d-flex justify-center mt-8">
    <!-- <v-container> -->
    <!-- <v-row> -->
    <!-- <v-col cols="2" class="pr-0 pt-8"> -->
    <MainMenu :submitOrderPopup.sync="submitOrderPopup" class="mt-4 menu-tab"/>
    <!-- </v-col> -->
    <!-- <v-col cols="10" class="pl-0" v-if="submitOrderPopup"> -->
    <SubmitOrder
      v-if="true"
      :data.sync="submitOrderData"
      :close.sync="submitOrderPopup"
    />
    <!-- </v-col> -->
    <!-- <v-col cols="8" class="pl-0" v-if="opened">
          <Documents />
        </v-col> -->
    <!-- <ServiceQualification />
      <Documents /> -->
    <!-- </v-row> -->
    <!-- </v-container> -->
  </v-container>
</template>

<style lang="scss">
@import "@/sass/main.scss";
h1 {
  text-align: center;
}
</style>

<script>
import MainMenu from '@/components/MainMenu.vue'
import SubmitOrder from '@/components/submitOrder/SubmitOrder'
// import Documents from '@/components/documents/Documents.vue'
export default {
  name: 'Submit',
  components: {
    MainMenu,
    SubmitOrder
    // ServiceQualification,
    // Documents
  },
  data: () => ({
    submitOrderData: null,
    submitOrderPopup: true
  }),
  methods: {}
}
</script>
