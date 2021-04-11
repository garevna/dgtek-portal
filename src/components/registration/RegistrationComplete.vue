<template>
  <v-card flat class="transparent mx-auto" max-width="700">
    <v-row justify="center">
      <h5>DGtek Partner's registration complete</h5>
      <p>
        ..........................................................................
        ..........................................................................
        ..........................................................................
        ..........................................................................
      </p>
    </v-row>
    <v-row justify="end">
      <v-btn text outlined @click="$router.push({ name: 'home' })"></v-btn>
    </v-row>
  </v-card>
</template>

<script>

export default {
  name: 'RegistrationComplete'
}
</script>

<style scoped>
</style>
