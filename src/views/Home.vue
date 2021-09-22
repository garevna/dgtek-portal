<template>
  <!-- <v-container fluid class="home-page-content mt-12"> -->
  <v-container fluid class="transparent mt-12">
    <v-row align="start" justify="center" justify-md="end">
      <SignIn
        v-if="!role"
        :reset.sync="resetPassword"
        :role.sync="role"
      />
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
    resetPassword: false,
    role: undefined
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
