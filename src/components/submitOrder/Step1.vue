<template>
  <v-form ref="step1">
    <h2>Agreement under which this Service Order is made</h2>
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field
          v-model="product"
          :rules="[rules.required]"
          label="Product / Service type (i.e. Point to Point, Layer 3 Internet etc)"
        />
        <v-text-field
          v-model="abn"
          label="ABN"
          :rules="[rules.required, rules.abnRule1, rules.abnRule2]"
        />
        <v-text-field
          v-model="contactPersonDetails"
          :rules="[rules.required]"
          label="Contact person details"
        />
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-text-field
          v-model="companyName"
          :rules="[rules.required]"
          label="Company name"
        />
        <v-text-field
          v-model="companyAddress"
          :rules="[rules.required]"
          label="Company address"
        />
      </v-col>
    </v-row>
    <h2>
      DGTEK PTY LTD <span class="digital-number">(ABN 61600 896 115)</span>
    </h2>
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field
          v-model="phone"
          label="Phone"
          :rules="[rules.required, rules.phoneRule1]"
        />
        <v-text-field
          v-model="email"
          label="Email"
          :rules="[rules.required, rules.emailRule1]"
        />
      </v-col>
      <v-col cols="12" xs="12" md="4" offset-md="2">
        <v-checkbox v-model="deposit" label="Deposit" class="pa-0 ma-0" />
        <v-checkbox
          v-model="bankGuarantee"
          label="Bank Guarantee"
          class="pa-0 ma-0"
        />
        <v-checkbox
          v-model="generalSequrityAgreement"
          label="General Security Agreement"
          class="pa-0 ma-0"
        />
        <v-checkbox
          v-model="noneRequired"
          label="None required"
          class="pa-0 ma-0"
        />
      </v-col>
      <v-col cols="12" xs="12">
        <v-card flat class="d-flex justify-end transparent">
          <v-btn color="primary" @click="validate" class="btn"
            >SAVE & CONTINUE</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'Step1',

  props: ['data', 'valid', 'back', 'forward'],

  data () {
    return {
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
    }
  },
  computed: {
  },
  watch: {},
  methods: {
    validate () {
      if (this.$refs.step1.validate()) this.forward()
      // this.forward()
    },
    loadFields () {
      if (!this.data) return
      this.product = this.data.product
      this.abn = this.data.abn
      this.contactPersonDetails = this.data.contactPersonDetails
      this.companyName = this.data.companyName
      this.companyAddress = this.data.companyAddress
      this.phone = this.data.phone
      this.email = this.data.email
      this.deposit = this.data.deposit
      this.bankGuarantee = this.data.bankGuarantee
      this.generalSequrityAgreement = this.data.generalSequrityAgreement
      this.noneRequired = this.data.noneRequired
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
        noneRequired: this.noneRequired
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

<style lang="scss" scoped>
.digital-number {
  font-weight: 300;
  // font-size: 20px;
}
</style>
