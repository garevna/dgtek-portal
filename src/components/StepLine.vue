<template>
  <v-stepper flat alt-labels>
    <v-stepper-header flat>
      <v-stepper-step  step="" :complete="1 <= currentStep">
        <span class="stepper">STEP 1</span>
      </v-stepper-step>
      <v-divider :class="{complete: 2 <= currentStep}"></v-divider>
      <v-stepper-step  step=""  :complete="2 <= currentStep">
        <span class="stepper">STEP 2</span>
      </v-stepper-step>
      <v-divider :class="{complete: 3 <= currentStep}"></v-divider>
      <v-stepper-step  step="" :complete="3 <= currentStep">
        <span class="stepper">STEP 3</span>
      </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<style scoped lang="scss">
.stepper{
  font-weight: 400;
  font-size: 14px;
  color: #000;
}
</style>

<script>
export default {
  props: ['steps', 'currentStep']
}
</script>
