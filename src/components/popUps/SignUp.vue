<template>
  <v-card flat class="text-center">
    <v-form ref="form-sign-up">
      <v-card flat style="height: 500px; overflow-y: auto; padding: 15px">
        <v-text-field
          color="success"
          label="ABN"
          v-model="ABN"
          :rules="[rules.required, rules.abnRule1, rules.abnRule2]"
        />

        <v-text-field
          color="success"
          label="Address"
          v-model="address"
          :rules="[rules.required]"
        />

        <v-text-field
          color="success"
          label="Phone"
          v-model="phone"
          :rules="[rules.required, rules.phoneRule1]"
        ></v-text-field>

        <v-text-field
          color="success"
          label="Email"
          v-model="email"
          :rules="[rules.required, rules.emailRule1, rules.emailRule2]"
        ></v-text-field>

        <v-text-field
          color="success"
          label="Additional email"
          v-model="additionalEmail"
          :rules="[rules.emailRule1, rules.emailRule2]"
        ></v-text-field>

        <v-text-field
          color="success"
          label="Site"
          v-model="site"
          :rules="[rules.required, rules.site2]"
        />

        <v-text-field
          color="success"
          label="Login"
          v-model="login"
          :rules="[rules.required]"
        />

        <v-text-field
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPass ? 'text' : 'password'"
          color="success"
          label="password"
          v-model="password"
          :rules="[rules.required, rules.minPass]"
          @click:append="showPass = !showPass"
        />

        <v-text-field
          color="success"
          label="Company"
          v-model="company"
          :rules="[rules.required]"
        />

        <v-text-field
          color="success"
          label="Contact number"
          v-model="contactNumber"
          :rules="[rules.required, rules.phoneRule1]"
        />

        <v-text-field
          color="success"
          label="Name"
          v-model="name"
          :rules="[rules.required]"
        ></v-text-field>

        <!-- <v-text-field
          color="success"
          label="Contact personDetail"
          v-model="contactPersonDetails"
          :rules="[rules.required]"
        ></v-text-field> -->

        <v-textarea
          color="success"
          label="Contact personDetail"
          outlined
          no-resize
          rows="8"
          v-model="contactPersonDetails"
          :rules="[rules.required]"
        />
      </v-card>
    </v-form>
    <v-btn
      color="primary"
      class="mx-auto"
      @click="signUp"
      >Send request for registration
    </v-btn>
  </v-card>
</template>

<style scoped>
</style>

<script>
import { mapState } from 'vuex'
const cryptico = require('cryptico')
const sha256 = require('js-sha256').sha256
export default {
  name: 'SignUp',
  components: {
    //
  },
  data () {
    return {
      // abn: this.ABN,
      // address: this.address,
      // phone: this.phone,
      // email: this.email,
      // additionalEmail: this.additionalEmail,
      // site: this.site,
      // login: this.login,
      // password: await this.hashing(this.password),
      // company: this.company,
      // contactNumber: this.contactNumber,
      // contactPersonDetails: this.contactPersonDetails,
      // name: this.name
      ABN: '',
      address: '',
      phone: '',
      email: '',
      additionalEmail: '',
      site: '',
      login: '',
      password: '',
      company: '',
      contactNumber: '',
      contactPersonDetails: '',
      name: '',
      showPass: false,
      valid: false,
      rules: {
        required: v => !!v || 'input is required',
        minPass: v => v.length >= 8 || 'Min 8 characters',
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
        site1: value => {
          const pattern = /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/
          const siteError = !pattern.test(value)
          return !siteError || 'Please enter your site url in format: example.com'
        },
        site2: value => {
          const pattern = /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&/=]*)?/gi
          const siteError = !pattern.test(value)
          return !siteError || 'Please enter your site url in format: example.com'
        },
        phoneRule1: value => {
          const pattern = /^[0-9]{10,12}$/gm
          const phoneError = !pattern.test(value.split(' ').join(''))
          return !phoneError || 'Invalid phone number'
        },
        emailRule1: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          const emailError = !pattern.test(value)
          return !value || !emailError || 'Please enter your email address in format: yourname@example.com'
        },
        emailRule2: value => {
          return this.email !== this.additionalEmail || !this.email || 'Email address and additional email address must not match'
        }
      }
    }
  },
  computed: {
    ...mapState('auth', ['authError', 'loading'])
  },
  methods: {
    async hashing (pass) {
      const passwordHash = await sha256.hmac(
        process.env.VUE_APP_SALT_SECRET,
        pass
      )
      const hashCipher = cryptico.encrypt(
        passwordHash,
        process.env.VUE_APP_BACK_ENCRYPT_SECRET
      ).cipher
      return hashCipher
    },
    // abn: "81 601 798 609"
    // activeSesions: [] // <=
    // additionalEmail: ""
    // address: "58 Brighton Rd, Ripponlea VIC 3185, Australia"
    // company: "Foton"
    // contactNumber: "02 5550 7897"
    // contactPersonDetailss: "David"
    // email: "foton@gmail.com"
    // login: "robo"
    // name: "Foton"
    // password: "cop"
    // phone: "18003596021"
    // role: "RSP" // <=
    // site: "https://www.wikipedia.org/"
    // _id: "5fd9054c26bfff342002a062" // <=

    // fullName: string;
    // login: string;
    // password: string;
    // address: string;
    // abn: string;
    // phone: string;
    // email: string;
    // message: string;
    // type: string;
    // createdAt?: string;
    // site?: string;
    // role?: string;
    // name: string;
    // contactPersonDetails: string;
    // contactNumber: string;
    // company: string;
    // additionalEmail: string;

    async signUp () {
      const data = {
        abn: this.ABN,
        address: this.address,
        phone: this.phone,
        email: this.email,
        additionalEmail: this.additionalEmail,
        site: this.site,
        login: this.login,
        password: await this.hashing(this.password),
        company: this.company,
        contactNumber: this.contactNumber,
        contactPersonDetails: this.contactPersonDetails,
        fullName: this.name
      }
      if (this.$refs['form-sign-up'].validate()) {
        this.$store.dispatch('auth/SIGN_UP', data)
      }
    }
  }
}
</script>
