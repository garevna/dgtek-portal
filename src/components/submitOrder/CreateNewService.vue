<template>
  <v-card flat class="wrap">
    <v-card flat class="pr-10 pl-10 wrap">
      <StepLine :currentStep="currentStep" :steps="steps" />
      <Step1 v-if="currentStep === 1" :data.sync="step1" :back="back" :forward="forward"/>
      <Step2 v-if="currentStep === 2" :data.sync="step2" :back="back"  :forward="forward"/>
      <Step3 v-if="currentStep === 3" :back="back" :sendData="sendData"/>
    </v-card>
    <!-- <v-card flat class="px-10 py-4 btn-container">
      <v-card flat class="empty-btn" v-if="currentStep === 1" />
      <v-btn
        outlined
        color="primary"
        v-if="currentStep > 1" class="btn btn-back"
        @click="back">
          BACK
      </v-btn>
      <v-btn color="primary" v-if="currentStep < 3" @click="forward" :disabled="!validation" class="btn">SAVE & CONTINUE</v-btn>
    </v-card> -->
  </v-card>
</template>

<style scoped lang="scss">
.wrap{
  background-color: #F3F3F3!important;
}

.btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}
.btn{
  position: relative;
  padding: 10px 50px!important;
}
.btn-back{
  background-image: url(../../assets/arrow.svg);
  background-position: 15% 48%;
}
</style>

<script>
/* eslint-disable no-unused-vars */
import { mapState } from 'vuex'
import Step1 from '../submitOrder/Step1'
import Step2 from '../submitOrder/Step2'
import Step3 from '../submitOrder/Step3'
import StepLine from '../StepLine'
export default {
  name: 'CreateNewService',
  props: ['data'],
  components: {
    Step1,
    Step2,
    Step3,
    StepLine
  },
  data: () => ({
    steps: 3,
    currentStep: 1,
    step1: null,
    step2: null,
    validation: false
  }),
  computed: {
    ...mapState('registration', ['registeredError', 'registeredSending'])
  },
  watch: {
    registeredSending (val) {
      if (!val && !this.registeredError) {
        this.step1 = null
        this.step2 = null
      }
    }
  },
  methods: {
    back () {
      if (this.currentStep > 1) this.currentStep -= 1
    },
    forward () {
      if (this.currentStep < this.steps) {
        this.currentStep += 1
        this.validation = false
      }
    },
    sendData (type) {
      console.log(type)
      const data = { ...this.step1, ...this.step2 }
      // fetch
      console.log(data)
      this.$store.dispatch('registration/SEND', data)
      this.$emit('update:data', null)
    },
    loadFields () {
      if (!this.data) return
      this.currentStep = this.data.currentStep
      this.step1 = this.data.step1
      this.step2 = this.data.step2
    },
    saveFields () {
      const data = {
        steps: this.steps,
        currentStep: this.currentStep,
        step1: this.step1,
        step2: this.step2
      }
      this.$emit('update:data', data)
    }
  },
  beforeMount () {
    this.loadFields()
  },
  destroyed () {
    this.saveFields()
  }
}
</script>
