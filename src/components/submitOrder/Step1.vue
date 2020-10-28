<template>
  <form ref="form">
    <h2>Agreement under which this Service Order is made</h2>
    <div class="d-flex justify-space-around"> 
      <div>
        <v-text-field 
          v-model="product"
          label="Product / Service type (i.e. Point to Point, Layer 3 Internet etc)"
        />
        <v-text-field 
          v-model="abn"
          label="ABN"
        />
        <v-text-field 
          v-model="contactPersonDetails"
          label="Contact person details"  
        />
      </div>
      <div>
        <v-text-field 
          v-model="companyName"
          label="Company name"  
        />
        <v-text-field 
          v-model="companyAddress"
          label="Company address" 
        />
      </div>
    </div>

    <h2>DGTEK PTY LTD{{(abn)}}</h2>
    <div class="d-flex justify-space-around">
      <div>
        <v-text-field 
          v-model="phone"
          label="Phone"
        />
        <v-text-field 
          v-model="email"
          label="Email"
        />
      </div>
    <div>
       <v-checkbox
     v-model="deposit"
      label="Deposit" 
    />
    <v-checkbox 
     v-model="bankGuarantee"
      label="Bank Guarantee"
    />
    <v-checkbox 
     v-model="generalSequrityAgreement"
      label="General Security Agreement"
    />
    <v-checkbox 
     v-model="noneRequired"
      label="None required"
    />
    </div>     
   
    </div>
   
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
    companyName: '',
    companyAddress: '',
    phone: '',
    email: '',
    deposit: false,
    bankGuarantee: false,
    generalSequrityAgreement: false,
    noneRequired: false,
  }),
  computed: {
    //
  },
  methods: {
    loadFields () {
      this.product = this.saveData.product
      this.abn = this.saveData.abn
      this.contactPersonDetails = this.saveData.contactPersonDetails
      this.companyName = this.saveData.companyName
      this.companyAddress = this.saveData.companyAddress
      this.phone = this.saveData.phone
      this.email = this.saveData.email
      this.deposit = this.saveData.deposit
      this.bankGuarantee = this.saveData.bankGuarantee
      this.generalSequrityAgreement = this.saveData.generalSequrityAgreement
      this.noneRequired = this.saveData.noneRequired
    },
    saveFields () {
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
      }
      this.saveData(data)
    }
  },
  beforeMount () {
    console.log('beforeMount')
    this.loadFields()
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    this.saveFields()
  }
};
</script>

<style>
</style>