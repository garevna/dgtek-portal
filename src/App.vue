<template>
  <v-app class="transparent">
    <router-view />
  </v-app>
</template>

<style lang="scss">
@import "./sass/main.scss";
</style>

<script>
  export default {
    name: 'App',
    data: () => ({})
  }
</script>