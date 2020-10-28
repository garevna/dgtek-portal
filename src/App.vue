<template>
  <v-app class="transparent">
    <router-view class="mt-12 mx-0 px-0" />
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