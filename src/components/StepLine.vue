<template>
    <v-stepper alt-labels>
        <v-stepper-header>
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

<script>
export default {
  props:['steps','currentStep']

}
</script>

<style>
.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step {
    background: none;
    border: 1px solid  #C1C1C1;
}
.v-stepper--alt-labels .v-stepper__header .v-divider {
    margin: 35px -75px 0;
}
.complete {
  background-color: #881F1A !important;
}
</style>