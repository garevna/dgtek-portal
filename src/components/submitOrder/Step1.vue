<template>
  <form ref="">

  </form>
</template>

<script>
export default {
  name: 'Step1',

  props: ['', ''],

  data: () => ({
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
  }),
  computed: {
    //
  },

}
</script>

<style>

</style>