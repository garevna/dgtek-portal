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
          v-model="vgsdfg"
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

  // props: ['', ''],

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
};
</script>

<style>
</style>