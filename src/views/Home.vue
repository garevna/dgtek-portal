<template>
<div class="d-flex justify-space-between">
  <MainMenu />
  <SubmitOrder />
  <!-- <ServiceQualification />
  <Documents /> -->
</div>
</template>


<script>
import MainMenu from '@/components/MainMenu.vue'
import SubmitOrder from '@/components/submitOrder/SubmitOrder'
// import ServiceQualification from '@/components/serviceQualification/ServiceQualification'
// import Documents from '@/components/documents/Documents'
export default {
  name: 'Home',
  components: {
    MainMenu,
    SubmitOrder,
    // ServiceQualification,
    // Documents
  },
  data: () => ({})
}
</script>