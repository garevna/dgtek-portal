<template>
    <v-stepper flat alt-labels>
        <v-stepper-header flat>
           <v-stepper-step  step="" :complete="1 <= currentStep">
            Step 1
          </v-stepper-step>
          <v-divider :class="{complete: 2 <= currentStep}"></v-divider>
          <v-stepper-step  step=""  :complete="2 <= currentStep">
            Step 2
          </v-stepper-step>
          <v-divider :class="{complete: 3 <= currentStep}"></v-divider>
          <v-stepper-step  step="" :complete="3 <= currentStep">
            Step 3
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
</template>

<style lang="scss">
@import '../sass/_variables.scss'; 

.v-stepper__header{
  background-color: #F3F3F3;
}

.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step {
    background: unset !important;
    border: 1px solid  $defaultStepLine;
}
.v-stepper--alt-labels .v-stepper__header .v-divider {
    margin: 35px -75px 0 !important;
}
.complete {
  background-color: $activeStepLine !important;
}
.v-stepper, .v-stepper__header {
  box-shadow: unset !important;
}
</style>

<script>
export default {
  props:['steps','currentStep']
}
</script>