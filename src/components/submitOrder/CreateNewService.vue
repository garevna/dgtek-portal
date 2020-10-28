<template>
  <div>
    <StepLine :currentStep="currentStep" :steps="steps"/>
    <Step1/>
    <Step2/>
    <div class="d-flex justify-space-between">
      <v-btn v-if="currentStep !== 0">BACK</v-btn>
      <v-btn>SAVE & CONTINUE</v-btn>
    </div>
  </div>
</template>

<script>
import Step1 from '../submitOrder/Step1'
import Step2 from '../submitOrder/Step2'
import StepLine from '../StepLine'
export default {
  name: 'CreateNewService',
  // props: ['', ''],
  components: {
    Step1,
    Step2,
    StepLine
  },
  data: () => ({
    currentStep:2,
    steps: 3,
    step1: {
      product: '',
      abn: '',
      contactPersonDetails: '',
      companyName: 'DGTek',
      companyAddress: '',
      phone: '1800359602',
      email: 'info@dgtek.net',
      deposit: false,
      bankGuarantee: false,
      generalSequrityAgreement: false,
      noneRequired: false,
    },
    step2: {
      // Technical details
      fullSiteAddress: '',
      serviceDescription: '',
      vlan: '',
      aEnd: '',
      customerName: '',
      zEnd: '',
      // buildings
      name: '',
      company: '',
      emailAdress: '',
      position: '',
      contactNumber: '',
      //  End customers
      companyName: '',
      position2: '',
      emailAdress2: '',
      siteContactName: '',
      contactNumber2: '',
    }
  }),
  computed: {
    //
  },
}
</script>

<style>

</style>