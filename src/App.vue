<template>
  <v-app class="transparent">
    <v-app-bar app height="48">
      <v-toolbar-title>{{ headers[$route.name] }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        v-if="$route.name !== 'home'"
        @click="$router.push({ name: 'home' })"
      >
        <v-icon color="primary">mdi-home</v-icon>
      </v-btn>
      <v-btn
        text
        @click="signIn = true"
        v-if="$route.name === 'home'"
      >
        <v-icon color="primary">mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="mt-12">
      <v-container fluid class="main-content">
        <router-view></router-view>
      </v-container>

    </v-main>
    <SignInDialog v-if="signIn" :dialog.sync="signIn" />

    <v-snackbar v-model="snackbar" :timeout="timeout" :color="color" top>
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="#fff"
          class="close-icon-snackbar"
          icon
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon large>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>

import '@/sass/main.scss'
import { mapState } from 'vuex'

import 'dgtek-styles'

export default {
  name: 'App',

  components: {
    SignInDialog: () => import('@/components/popUps/SignInDialog.vue')
  },

  data: () => ({
    headers: {
      home: 'Service Order',
      services: 'Services',
      documents: 'Documents'
    },
    signIn: false,
    snackbar: false,
    timeout: 8000
  }),
  computed: {
    ...mapState('auth', ['authError', 'authMessage']),
    ...mapState('message', ['error', 'sending']),
    ...mapState('registration', ['registeredError', 'registeredSending']),
    color () {
      return this.authError || this.registeredError || this.error ? '#900' : '#09b'
    },
    text () {
      return this.error || this.registeredError ? 'Error' : 'Success'
    }
  },
  watch: {
    authError (val) {
      if (!val) return
      this.text = val
      this.snackbar = true
    },
    sending (val) {
      if (val) return
      this.snackbar = true
    },
    authMessage (val) {
      if (!val) return
      this.text = val
      this.snackbar = true
    },
    registeredSending (val) {
      if (val) return
      if (this.registeredError) {
        this.text = this.registeredError
        this.color = '$primary'
        this.snackbar = true
      } else {
        this.text = 'Registration data sent successfully!'
        this.color = '$info'
        this.snackbar = true
      }
    }
  },
  methods: {
    signCallback () {
      this.showPopUpSign = true
    }
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>
