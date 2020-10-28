<template>
  <div>
    <Step1/>
    <Step2/>
  </div>
</template>

<script>
import Step1 from '../submitOrder/Step1'
import Step2 from '../submitOrder/Step2'
export default {
  name: 'Step1',
  props: ['', ''],
  components: {
    Step1,
    Step2
  },
  data: () => ({
    currentStep: 1,
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