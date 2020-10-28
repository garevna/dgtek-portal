<template>
  <div>
    <StepLine :currentStep="currentStep" :steps="steps"/>
    <Step1
    :loadData.sync="step1"
    :saveData="saveDataStep1"
    />
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
  props: ['loadData', 'saveData'],
  components: {
    Step1,
    Step2,
    StepLine
  },
  data: () => ({
    steps: 3,
    currentStep: 1,
    step1: null,
    step2: null
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
    },
    saveDataStep2 (data) {
      this.step1.fullSiteAddress = data.fullSiteAddress
      this.step1.serviceDescription = data.serviceDescription
      this.step1.contactPersonDetails = data.contactPersonDetails
      this.step1.vlan = data.vlan
      this.step1.aEnd = data.aEnd
      this.step1.customerName = data.customerName
      this.step1.zEnd = data.zEnd

      this.step1.name = data.name
      this.step1.company = data.company
      this.step1.position = data.position
      this.step1.contactNumber = data.contactNumber

      this.step1.companyName = data.companyName
      this.step1.position2 = data.position2
      this.step1.emailAdress2 = data.emailAdress2
      this.step1.siteContactName = data.siteContactName
      this.step1.contactNumber2 = data.contactNumber2
    },
    loadFields () {
      if (!this.loadData) return
      this.currentStep = this.loadData.currentStep
      this.step1 = this.loadData.step1
      this.step2 = this.loadData.step2
    },
    saveFields () {
      const data = {
        currentStep: this.currentStep,
        step1: this.step1,
        step2: this.step2,
        }
      this.saveData(data)
    }
  },
  beforeMount () {
    console.log('beforeMount CreateNewService')
    this.loadFields()
  },
  beforeDestroy () {
    console.log('beforeDestroy CreateNewService')
    this.saveFields()
  }
}
</script>

<style>

</style>