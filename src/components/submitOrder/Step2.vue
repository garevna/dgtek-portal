<template>
  <v-form ref="step2">
    <h2>Technical details and Contact details</h2>
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field
          v-model="fullSiteAddress"
          label="Full Site Address"
          :rules="[rules.required]"
        />
        <v-text-field
          v-model="serviceDescription"
          label="Service Description (from MSA)"
          :rules="[rules.required]"
        />
        <v-text-field v-model="vlan" :rules="[rules.required]" label="VLAN" />
        <v-text-field v-model="aEnd" :rules="[rules.required]" label="A End:" />
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-text-field
          v-model="customerName"
          :rules="[rules.required]"
          label="Custumer Name"
        />
        <v-text-field v-model="term" :rules="[rules.required]" label="Term:" />
        <v-text-field v-model="zEnd" :rules="[rules.required]" label="Z End:" />
      </v-col>
    </v-row>
    <h2>
      *Building / Facilities Manager or Property Manager or Strata or Owner
    </h2>
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field v-model="name" :rules="[rules.required]" label="Name" />
        <v-text-field
          v-model="company"
          :rules="[rules.required]"
          label="Company"
        />
        <v-text-field
          v-model="buildingsEmailAddress"
          :rules="[rules.required, rules.emailRule1]"
          label="Email Address"
        />
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-text-field
          v-model="buildingsPosition"
          :rules="[rules.required]"
          label="Position"
        />
        <v-text-field
          v-model="contactNumber"
          :rules="[rules.required, rules.phoneRule1]"
          label="Contact Number"
        />
      </v-col>
    </v-row>
    <h2>End Customer & On-Site Contact Details</h2>
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field
          v-model="endCustomersCompanyName"
          :rules="[rules.required]"
          label="Company Name"
        />
        <v-text-field
          v-model="customersPosition"
          :rules="[rules.required]"
          label="Position"
        />
        <v-text-field
          v-model="customersEmailAdress"
          :rules="[rules.required, rules.emailRule1]"
          label="Email Address"
        />
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-text-field
          v-model="siteContactName"
          :rules="[rules.required]"
          label="Site Contact Name"
        />
        <v-text-field
          v-model="customersContactNumber"
          :rules="[rules.required, rules.phoneRule1]"
          label="Contact Number"
        />
      </v-col>
      <v-col cols="12" xs="12">
        <v-card flat class="d-flex transparent">
          <v-btn outlined color="primary" class="btn btn-back" @click="back">
            BACK
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="validate" class="btn"
            >SAVE & CONTINUE</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<style lang="sass">
</style>

<script>
export default {
  name: 'Step2',

  props: ['data', 'valid', 'back', 'forward'],

  data: () => ({
    // Technical details
    fullSiteAddress: '',
    serviceDescription: '',
    vlan: '',
    aEnd: '',
    customerName: '',
    term: '',
    zEnd: '',
    // buildings
    name: '',
    company: '',
    buildingsEmailAddress: '',
    buildingsPosition: '',
    contactNumber: '',
    //  End customers
    endCustomersCompanyName: '',
    customersPosition: '',
    customersEmailAdress: '',
    siteContactName: '',
    customersContactNumber: '',
    rules: {
      required: value => !!value || 'Required',
      abnRule1: value => {
        const pattern = /^[0-9]{11}$/gm
        return pattern.test(value.split(' ').join('')) || 'Invalid ABN number'
      },
      abnRule2: value => {
        const weight = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
        const array = value
          .split(' ')
          .join('')
          .split('')
        array.unshift(array.shift() - 1)
        const result = array.reduce((accum, item, index) => {
          return accum + item * weight[index]
        }, 0)
        const abnError = result % 89 !== 0
        return !abnError || 'Invalid ABN number'
      },
      phoneRule1: value => {
        const pattern = /^[0-9]{10,12}$/gm
        const phoneError = !pattern.test(value.split(' ').join(''))
        return !phoneError || 'Invalid phone number'
      },
      emailRule1: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const emailError = !pattern.test(value)
        return !emailError || 'Invalid e-mail'
      }
    }
  }),
  computed: {
  },
  watch: {},
  methods: {
    validate () {
      if (this.$refs.step2.validate()) this.forward()
      // this.forward()
    },
    loadFields () {
      if (!this.data) return
      this.fullSiteAddress = this.data.fullSiteAddress
      this.serviceDescription = this.data.serviceDescription
      this.vlan = this.data.vlan
      this.aEnd = this.data.aEnd
      this.customerName = this.data.customerName
      this.term = this.data.term
      this.zEnd = this.data.zEnd

      this.name = this.data.name
      this.company = this.data.company
      this.buildingsEmailAddress = this.data.buildingsEmailAddress
      this.buildingsPosition = this.data.buildingsPosition
      this.contactNumber = this.data.contactNumber

      this.endCustomersCompanyName = this.data.endCustomersCompanyName
      this.customersPosition = this.data.customersPosition
      this.customersEmailAdress = this.data.customersEmailAdress
      this.siteContactName = this.data.siteContactName
      this.customersContactNumber = this.data.customersContactNumber
    },
    saveFields () {
      const data = {
        fullSiteAddress: this.fullSiteAddress,
        serviceDescription: this.serviceDescription,
        vlan: this.vlan,
        aEnd: this.aEnd,
        customerName: this.customerName,
        term: this.term,
        zEnd: this.zEnd,

        name: this.name,
        company: this.company,
        buildingsEmailAddress: this.buildingsEmailAddress,
        buildingsPosition: this.buildingsPosition,
        contactNumber: this.contactNumber,

        endCustomersCompanyName: this.endCustomersCompanyName,
        customersPosition: this.customersPosition,
        customersEmailAdress: this.customersEmailAdress,
        siteContactName: this.siteContactName,
        customersContactNumber: this.customersContactNumber
      }
      this.$emit('update:data', data)
    }
  },
  mounted () {
    this.loadFields()
  },
  beforeDestroy () {
    this.saveFields()
  }
}
</script>

<style>
</style>
