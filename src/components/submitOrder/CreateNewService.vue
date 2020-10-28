<template>
  <div>
    <Step1
    :loadData.sync="step1"
    :saveData="saveDataStep1"
    />
    <Step2/>
  </div>
</template>

<script>
import Step1 from '../submitOrder/Step1'
import Step2 from '../submitOrder/Step2'
export default {
  name: 'CreateNewService',
  // props: ['', ''],
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
  methods: {
    saveDataStep1 (data) {
      this.step1.product = data.product
      this.step1.abn = data.abn
      this.step1.contactPersonDetails = data.contactPersonDetails
      this.step1.companyName = data.companyName
      this.step1.companyAddress = data.companyAddress
      this.step1.phone = data.phone
      this.step1.email = data.email
      this.step1.deposit = data.deposit
      this.step1.bankGuarantee = data.bankGuarantee
      this.step1.generalSequrityAgreement = data.generalSequrityAgreement
      this.step1.noneRequired = data.noneRequired
    }
    // saveFields () {
    //   const data = {
    //     product: this.product,
    //     abn: this.abn,
    //     contactPersonDetails: this.contactPersonDetails,
    //     companyName: this.companyName,
    //     companyAddress: this.companyAddress,
    //     phone: this.phone,
    //     email: this.email,
    //     deposit: this.deposit,
    //     bankGuarantee: this.bankGuarantee,
    //     generalSequrityAgreement: this.generalSequrityAgreement,
    //     noneRequired: this.noneRequired,
    //   }
    //   this.saveData(data)
    // }
  }
}
</script>

<style>

</style>