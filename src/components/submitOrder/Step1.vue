<template>
  <form ref="form">
    <h2>Agreement under which this Service Order is made</h2>
    <div>
      <div>
        <v-text-field 
          v-model="product"
          label="Product / Service type (i.e. Point to Point, Layer 3 Internet etc)"
        >
        <v-text-field 
          v-model="ABN"
          label="ABN"
        />
        <v-text-field 
          v-model="contactPerson"
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

    <h2>DGTEK PTY LTD{{(ABN)}}</h2>
    <v-text-field 
      v-model="phone"
      label="Phone"
    />
    <v-text-field 
       v-model="email"
      label="Email"
    />
    <v-checkbox
      label="Deposit" 
    />
    <v-checkbox 
      label="Bank Guarantee"
    />
    <v-checkbox 
      label="General Security Agreement"
    />
    <v-checkbox 
      label="None required"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style>
</style>