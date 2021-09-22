<template>
  <!-- <v-container fluid class="home-page-content mt-12"> -->
  <v-container fluid class="transparent mt-12">
    <v-btn
      v-if="!drawer"
      text
      color="#900"
      @click.stop="drawer = !drawer"
      style="position: fixed; z-index: 5; top: 24px; right: 100px;"
    >
      <v-icon>mdi-calculator</v-icon>
      Calculator
    </v-btn>
    <v-btn
      text
      color="#900"
      @click.stop="goToCabinet"
      style="position: fixed; z-index: 5; top: 24px; right: 240px;"
    >
      <v-icon class="mr-2">mdi-monitor-dashboard</v-icon>
      Dashboard
    </v-btn>
    <PortalCalculator :drawer.sync="drawer" :role="role" />
  </v-container>
</template>

<script>

import 'dgtek-portal-calculator'

import { hostHandler, credentialsHandler } from '@/helpers'

export default {
  name: 'Partner',

  data: () => ({
    drawer: false,
    role: undefined
  }),

  methods: {
    goToCabinet () {
      this.$openInternalLink(`${hostHandler()}rsp#${credentialsHandler()}`, '_self')
    }
  }
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
