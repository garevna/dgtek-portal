<template>
  <v-container class="homefone">
    <v-stepper v-model="step" class="transparent" style="box-shadow: none;">
      <h4 class="d-block d-md-none ml-5 mt-4">
        {{ stepsNames[step - 1] }}
      </h4>
      <v-stepper-header
        elevation="0"
        class="transparent text-center mt-8 d-none d-md-block"
        style="box-shadow: none"
      >
          <v-btn
             class="mx-1"
             :class="{ active: first, tab: !first }"
             @click="step=1"
          >
            {{ stepsNames[0] }}
          </v-btn>

        <v-btn
          class="mx-1"
          :class="{ active: second, tab: !second }"
          @click="step=2"
        >
            {{ stepsNames[1] }}
          </v-btn>

        <v-btn
          class="mx-1"
          :class="{ active: third, tab: !third }"
          @click="step=3"
        >
            {{ stepsNames[2] }}
          </v-btn>

          <v-btn
            class="mx-1"
            :class="{ active: fourth, tab: !fourth }"
            @click="step=4"
          >
              {{ stepsNames[3] }}
            </v-btn>
      </v-stepper-header>

      <v-stepper-items class="transparent mt-1 mt-md-6 mb-12">
        <v-stepper-content step="1">
          <RegistrationStep :schema.sync="data" step="company" />
        </v-stepper-content>

        <v-stepper-content step="2">
          <RegistrationStep :schema.sync="data" step="general" />
        </v-stepper-content>

        <v-stepper-content step="3">
          <RegistrationStep :schema.sync="data" step="technic" />
        </v-stepper-content>

        <v-stepper-content step="4">
          <RegistrationStep :schema.sync="data" step="auth" :agree.sync="agree" />
        </v-stepper-content>

        <v-stepper-content step="5">
          <RegistrationComplete v-if="submited" />
        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
    <v-bottom-navigation fixed flat height="64" class="homefone pt-2 mb-8">
      <v-container fluid class="mt-1">
        <v-row justify="center">
          <v-btn
            v-if="step > 1"
            @click="step--"
            text
          >
            <v-icon color="buttons">$pagePrev</v-icon>
            Back
          </v-btn>
          <v-btn
            v-if="step < 4"
            @click="step++"
            text
          >
            <v-icon color="buttons">$pageNext</v-icon>
            Next
          </v-btn>
          <v-btn
            v-if="step === 4 && agree"
            @click="submit"
            text
            color="primary"
          >
            <v-icon color="buttons">$send</v-icon>
            Submit
          </v-btn>
        </v-row>
      </v-container>
    </v-bottom-navigation>
  </v-container>
</template>

<script>

import { RegistrationStep, RegistrationComplete } from '@/components/registration'

import { stepsNames, schema } from '@/config'

import { getRegistrationResult } from '@/helpers'

export default {
  name: 'Registration',
  components: {
    RegistrationStep,
    RegistrationComplete
  },
  data: () => ({
    step: 1,
    agree: false,
    stepsNames: stepsNames,
    data: schema,
    submited: false
  }),
  computed: {
    first () {
      return this.step === 1
    },
    second () {
      return this.step === 2
    },
    third () {
      return this.step === 3
    },
    fourth () {
      return this.step === 4
    }
  },
  methods: {
    submit () {
      const { error, result } = getRegistrationResult(this.data)

      console.log(error, result)
      if (error) {
        this.$root.$emit('open-error-popup', {
          errorType: 'Registration form',
          errorMessage: 'Invalid or empty fields'
        })
        return
      }
      this.$root.__registrate(result)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style>
.tab {
  background: transparent!important;
  border: solid 1px #900;
}

.active {
  background: #900!important;
  color: #fff!important;
}
</style>
