<template>
  <v-row justify="center" justify-md="end" class="mt-12">
    <v-card elevation="12" class="text-center mt-12 mr-md-12" max-width="600" min-width="360" height="200">
      <h6 class="my-4 text-right mr-4" style="cursor: pointer" @click="$router.push({ name: 'register' })">
        Registration for partner
        <v-icon color="primary" class="ml-2">$pageNext</v-icon>
      </h6>
      <v-stepper v-model="step">
        <v-stepper-items>
          <v-stepper-content :step="1">
            <v-text-field
              outlined
              color="success"
              label="email"
              v-model="email"
              :rules="[rules.required, rules.email]"
            />
            <v-spacer />
            <v-btn
              dark
              color="buttons"
              v-if="!emailError"
              @click="step = 2"
            >
              Continue
            </v-btn>
            </v-stepper-content>
            <v-stepper-content :step="2">
              <v-text-field
                outlined
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPass ? 'text' : 'password'"
                color="success"
                label="password"
                v-model="password"
                :rules="[rules.required]"
                 @click:append="showPass = !showPass"
              />
              <v-btn
                text
                color="buttons"
                @click="reset = true"
                class="reset-password"
              >
                Reset your password
              </v-btn>
              <v-spacer />
              <v-btn
                dark
                color="buttons"
                @click="signIn"
              >
                Sign In
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      <ResetPassword :opened.sync="reset" v-if="reset" />
    </v-card>
  </v-row>
</template>

<style scoped>
</style>

<script>

import { loginHandler } from '@/helpers'
import { patterns } from '@/config'

export default {
  name: 'SignIn',
  components: {
    ResetPassword: () => import('@/components/ResetPassword.vue')
  },
  data () {
    return {
      step: 1,
      email: '',
      password: '',
      reset: false,
      showPass: false,
      emailError: false,
      valid: false,
      rules: {
        required: v => !!v || 'input is required',
        email: value => patterns.email.test(value) || 'Invalid email.'
      }
    }
  },
  watch: {
    email (val) {
      loginHandler(val)
    }
  },
  methods: {
    async signIn () {
      this.$root.__authorize(this.email, this.password)
      this.step = 1
    }
  }
}
</script>

<style scoped>
  .reset-password {
    font-size: 12px;
    margin-top: -16px;
    text-transform: none;
  }
  @media screen and (max-widt: 420px) {
    * {
      font-size: 14px;
    }
    .reset-password {
      font-size: 11px;
      /* margin-top: -16px;
      text-transform: none; */
    }
  }
</style>
