<template>
  <div class="pr-16 pl-16 pb-16 wrap">
    <StepLine :currentStep="currentStep" :steps="steps" />
    <Step1 v-if="currentStep === 1" :loadData.sync="step1" :saveData="saveDataStep1" />
    <Step2 v-if="currentStep === 2" :loadData.sync="step2" :saveData="saveDataStep2" />
    <Step3 v-if="currentStep === 3" />
    <div class="btn-container mt-4">
      <v-btn v-if="currentStep > 1" class="btn-back" @click="back">BACK</v-btn>
      <v-btn color="primary" @click="forward" class="btn-next">SAVE & CONTINUE</v-btn>
    </div>
  </div>
</template>

<style scoped>
.wrap{
  background-color: #F3F3F3;
}
.btn-container {
  position: relative;
}
.btn-back{
  position: absolute;
  left: 0;
  top:0;
}
.btn-next{
  position: absolute;
  right: 0;
}
</style>

<script>
import Step1 from '../submitOrder/Step1';
import Step2 from '../submitOrder/Step2';
import Step3 from '../submitOrder/Step3';
import StepLine from '../StepLine';
export default {
  name: 'CreateNewService',
  props: ['loadData', 'saveData'],
  components: {
    Step1,
    Step2,
    Step3,
    StepLine,
  },
  data: () => ({
    steps: 3,
    currentStep: 1,
    step1: null,
    step2: null,
  }),
  computed: {
    //
  },
  methods: {
    back() {
      if (this.currentStep > 1) this.currentStep -= 1;
    },
    forward() {
      if (this.currentStep < this.steps) this.currentStep += 1;
    },
    saveDataStep1(data) {
      if (!this.step1) this.step1 = {};
      this.step1.product = data.product;
      this.step1.abn = data.abn;
      this.step1.contactPersonDetails = data.contactPersonDetails;
      this.step1.companyName = data.companyName;
      this.step1.companyAddress = data.companyAddress;
      this.step1.phone = data.phone;
      this.step1.email = data.email;
      this.step1.deposit = data.deposit;
      this.step1.bankGuarantee = data.bankGuarantee;
      this.step1.generalSequrityAgreement = data.generalSequrityAgreement;
      this.step1.noneRequired = data.noneRequired;
    },
    saveDataStep2(data) {
      if (!this.step2) this.step2 = {};
      this.step2.fullSiteAddress = data.fullSiteAddress;
      this.step2.serviceDescription = data.serviceDescription;
      this.step2.contactPersonDetails = data.contactPersonDetails;
      this.step2.vlan = data.vlan;
      this.step2.aEnd = data.aEnd;
      this.step2.customerName = data.customerName;
      this.step2.zEnd = data.zEnd;

      this.step2.name = data.name;
      this.step2.company = data.company;
      this.step2.position = data.position;
      this.step2.contactNumber = data.contactNumber;

      this.step2.companyName = data.companyName;
      this.step2.position2 = data.position2;
      this.step2.emailAdress2 = data.emailAdress2;
      this.step2.siteContactName = data.siteContactName;
      this.step2.contactNumber2 = data.contactNumber2;
    },
    loadFields() {
      if (!this.loadData) return;
      this.currentStep = this.loadData.currentStep;
      this.step1 = this.loadData.step1;
      this.step2 = this.loadData.step2;
    },
    saveFields() {
      const data = {
        currentStep: this.currentStep,
        step1: this.step1,
        step2: this.step2,
      };
      this.saveData(data);
    },
  },
  beforeMount() {
    console.log('beforeMount CreateNewService');
    this.loadFields();
  },
  beforeDestroy() {
    console.log('beforeDestroy CreateNewService');
    this.saveFields();
  },
};
</script>