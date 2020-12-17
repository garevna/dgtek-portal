<template>
  <v-app-bar
    app
    elevate-on-scroll
    height="100"
  >
    <v-container>
      <v-card flat class="transparent d-flex card-wrapp">
        <!-- <router-link to="/">
          <img src="../assets/dgtek-logo.svg" alt="dgtek-logo" height="48" />
        </router-link> -->
        <v-spacer />
        <v-card
          flat
          class="d-flex align-center justify-end transparent"
        >
          <p class="mb-0" @click.prevent="signCall()">Sign in</p>
        </v-card>
      </v-card>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
p {
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'Header',
  props: ['signCallback'],
  components: {
    //
  },
  data: () => ({
    //
  }),
  computed: {
    dialog: {
      get: function () {
        return this.show
      },
      set: function (val) {
        this.$emit('update:show', val)
      }
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('auth/LOG_OUT')
    },
    signCall () {
      if (this.signCallback) this.signCallback()
    }
  }
}
</script>
