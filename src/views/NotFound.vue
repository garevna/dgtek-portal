<template>
    <v-container>
      <h2 class="text-center">Page not found</h2>
      <router-link to="/">to Home Page</router-link>
  <v-bottom-navigation
      :value="value"
      color="buttons"
      grow
      app
    >
      <v-btn @click="toRouteName('SubmitOrder')">
        <span>to Home Page</span>
      </v-btn>
    </v-bottom-navigation>
    </v-container>

</template>

<style>

</style>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      value: 0
    }
  },
  methods: {
    toRouteName (name) {
      if (name && typeof name === 'string' && this.$route.name !== name) {
        this.$router.push({ name })
      }
    }
  }
}
</script>
