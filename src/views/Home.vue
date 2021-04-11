<template>
  <v-container fluid class="home-page-content mt-12">
    <v-row align="start" justify="center" justify-md="end">
      <SignIn :reset.sync="resetPassword" />
    </v-row>
    <ResetPassword v-if="resetPassword" />
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {
    SignIn: () => import('@/components/SignIn.vue')
  },
  data: () => ({
    resetPassword: false
  })
}
</script>

<style>
.home-page-content {
  height: 100vh;
  background: transparent;
  background-image: url(../assets/images/melbourne-2-1.svg);
  background-position: center;
  background-size:cover;
}
</style>
