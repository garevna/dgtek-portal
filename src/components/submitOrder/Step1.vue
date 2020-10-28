<template>
  <form ref="form">
    <h2>Agreement under which this Service Order is made</h2>
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field
          v-model="product"
          label="Product / Service type (i.e. Point to Point, Layer 3 Internet etc)"
        />
        <v-text-field v-model="abn" label="ABN" />
        <v-text-field v-model="contactPersonDetails" label="Contact person details" />
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-text-field v-model="companyName" label="Company name" />
        <v-text-field v-model="companyAddress" label="Company address" />
      </v-col>
    </v-row>
    <h2>DGTEK PTY LTD <span>({{abn}})</span></h2>
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field v-model="phone" label="Phone" />
        <v-text-field v-model="email" label="Email" />
      </v-col>
      <v-col cols="12" xs="12" md="4" offset-md="2">
        <v-checkbox v-model="deposit" label="Deposit" class="pa-0 ma-0"/>
        <v-checkbox v-model="bankGuarantee" label="Bank Guarantee" class="pa-0 ma-0" />
        <v-checkbox v-model="generalSequrityAgreement" label="General Security Agreement" class="pa-0 ma-0"/>
        <v-checkbox v-model="noneRequired" label="None required" class="pa-0 ma-0"/>
      </v-col>
    </v-row>
  </form>
</template>

<script>
export default {
  name: 'Step1',

  props: ['loadData', 'saveData'],

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
  methods: {
    loadFields() {
      if (!this.loadData) return;
      this.product = this.loadData.product;
      this.abn = this.loadData.abn;
      this.contactPersonDetails = this.loadData.contactPersonDetails;
      this.companyName = this.loadData.companyName;
      this.companyAddress = this.loadData.companyAddress;
      this.phone = this.loadData.phone;
      this.email = this.loadData.email;
      this.deposit = this.loadData.deposit;
      this.bankGuarantee = this.loadData.bankGuarantee;
      this.generalSequrityAgreement = this.loadData.generalSequrityAgreement;
      this.noneRequired = this.loadData.noneRequired;
    },
    saveFields() {
      const data = {
        product: this.product,
        abn: this.abn,
        contactPersonDetails: this.contactPersonDetails,
        companyName: this.companyName,
        companyAddress: this.companyAddress,
        phone: this.phone,
        email: this.email,
        deposit: this.deposit,
        bankGuarantee: this.bankGuarantee,
        generalSequrityAgreement: this.generalSequrityAgreement,
        noneRequired: this.noneRequired,
      };
      this.saveData(data);
    },
  },
  beforeMount() {
    console.log('beforeMount Step1');
    this.loadFields();
  },
  beforeDestroy() {
    console.log('beforeDestroy Step1');
    this.saveFields();
  },
};
</script>

<style>
</style>