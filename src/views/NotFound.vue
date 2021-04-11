<template>
    <v-container fluid>
      <v-row align="center" justify="center" style="height: 90vh">
        <v-card-text text-center>
          <h2 class="text-center ma-auto">Page not found</h2>
        </v-card-text>
        <router-link to="/">to Home Page</router-link>
      </v-row>
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
