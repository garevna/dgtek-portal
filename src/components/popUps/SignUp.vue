<template>
  <v-card flat class="text-center">
    <v-form ref="form-sign-up">
      <v-card flat style="height: 500px; overflow-y: auto; padding: 15px">
        <v-text-field
          color="success"
          label="full name"
          v-model="fullName"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          color="success"
          label="login"
          v-model="login"
          :rules="[rules.required]"
        />
        <v-text-field
          color="success"
          label="company name"
          v-model="companyName"
          :rules="[rules.required]"
        />
        <v-text-field
          color="success"
          label="ABN"
          v-model="ABN"
          :rules="[rules.required, rules.abnRule1, rules.abnRule2]"
        />
        <v-text-field
          color="success"
          label="contact phone"
          v-model="phone"
          :rules="[rules.required, rules.phoneRule1]"
        ></v-text-field>
        <v-text-field
          color="success"
          label="contact email"
          v-model="email"
          :rules="[rules.required, rules.emailRule1]"
        ></v-text-field>
        <v-text-field
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPass ? 'text' : 'password'"
          color="success"
          label="password"
          v-model="password"
          :rules="[rules.required, rules.minPass]"
          @click:append="showPass = !showPass"
        />
        <v-textarea
          color="success"
          label="message"
          outlined
          no-resize
          rows="8"
          v-model="message"
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
      fullName: '',
      login: '',
      companyName: '',
      ABN: '',
      message: '',
      phone: '',
      email: '',
      password: '',
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
    async signUp () {
      const data = {
        fullName: this.fullName,
        login: this.login,
        companyName: this.companyName,
        ABN: this.ABN,
        phone: this.phone,
        email: this.email,
        passwordHash: await this.hashing(this.password),
        message: this.message
      }
      if (this.$refs['form-sign-up'].validate()) {
        this.$store.dispatch('auth/SIGN_UP', data)
      }
    }
  }
}
</script>
