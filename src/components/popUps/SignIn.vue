<template>
  <v-card flat class="text-center">
    <v-form ref="form-sign-in" class="py-4">
      <v-text-field
        color="success"
        label="email"
        v-model="email"
        :rules="[rules.required, rules.emailRule1]"
      />
      <v-text-field
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPass ? 'text' : 'password'"
        color="success"
        label="password"
        v-model="password"
        :rules="[rules.required]"
         @click:append="showPass = !showPass"
      />
    </v-form>
    <v-btn
      color="primary"
      background-color="primary"
      light
      @click="signIn"
      >Sign In</v-btn
    >
  </v-card>
</template>

<style scoped>
</style>

<script>
/* eslint-disable no-unused-vars */
import { mapState } from 'vuex'
const cryptico = require('cryptico')
const sha256 = require('js-sha256').sha256
export default {
  name: 'SignIn',
  components: {
    //
  },
  data () {
    return {
      email: '',
      password: '',
      showPass: false,
      valid: false,
      rules: {
        required: v => !!v || 'input is required',
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
    async signIn () {
      const data = {
        email: this.email,
        password: await this.hashing(this.password)
      }
      if (this.$refs['form-sign-in'].validate()) {
        this.$store.dispatch('auth/SIGN_IN', data)
      }
    }
  }
}
</script>
