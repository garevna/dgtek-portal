<template>
  <v-bottom-navigation
      v-if="showBottomNavigation"
      :value="value"
      color="buttons"
      grow
      app
    >
      <v-btn @click="toRouteName('SubmitOrder')">
        <span>Submit Form</span>
        <v-icon>mdi-format-list-checkbox</v-icon>
      </v-btn>
      <v-btn @click="toRouteName('Services')">
        <span>Services</span>
        <v-icon>mdi-file-tree</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>

<style scoped>
h6, p {
  font-family: 'Gilroy';
  font-style: normal;
}
h6 {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000;
}
p {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #757575;
}
</style>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      value: 0,
      bottomNavigationShowInRouteNames: [
        'SubmitOrder',
        'Services',
        'Service'
      ]
    }
  },
  computed: {
    showBottomNavigation () {
      return this.bottomNavigationShowInRouteNames.includes(this.$route.name)
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
