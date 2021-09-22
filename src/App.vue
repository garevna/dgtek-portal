<template>
  <v-app class="home-page-content" style="overflow: hidden">
    <v-container fluid class="home-page-content mt-12">
      <v-app-bar app flat height="80" class="homefone">
        <v-card flat class="transparent text-left mt-4 ml-0" height="50">
          <v-img :src="require('@/assets/dgtek-logo.svg')" width="70" class="mr-8" />
        </v-card>
        <h3 class="main-header d-none d-md-block mt-5">DGtek provisioning portal</h3>
        <v-spacer />
        <v-btn text v-if="$route.name !== 'home'" @click="$router.push({ name: 'home' })">
          <v-icon large color="primary">mdi-home</v-icon>
        </v-btn>
      </v-app-bar>

      <v-progress-linear
        :active="progress"
        :indeterminate="progress"
        color="primary"
        style="z-index: 5"
      ></v-progress-linear>

      <v-main class="main-content mt-8 mb-12">
        <transition name="page-fade-transition" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-main>

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
      <error-message />
      <simple-message />
      <v-row justify="center" style="position: fixed; bottom: 0; z-index: 100; width: 105%; height: 32px; background: #aaa;">
        <p class="text-center" style="color: #efefef;">
          <small>
            <sub>2021 &copy; Dgtek Pty. Ltd ABN 61 600 896 115</sub>
          </small>
        </p>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import 'dgtek-styles'

import { credentialsHandler, roleHandler, userIdHandler } from '@/helpers'

const homeImage = require('@/assets/images/melbourne-2-1.svg')
const servicesImage = require('@/assets/images/Webb-Bridge-Melbourne-Drawing-effect.svg')

export default {
  name: 'App',

  data: () => ({
    isActive: false,
    progress: false,
    headers: {
      home: 'Service Order',
      services: 'Services',
      documents: 'Documents'
    },
    signIn: false,
    snackbar: false,
    timeout: 8000,
    drawer: false,
    calculatorDisabled: true
  }),

  computed: {
    color () {
      return this.authError || this.registeredError || this.error ? '#900' : '#09b'
    },
    text () {
      return this.error || this.registeredError ? 'Error' : 'Success'
    },
    backgroundImage () {
      return this.$route.name === 'home' ? homeImage : servicesImage
    }
  },
  methods: {
    errorHandler (event) {
      const { errorType, errorMessage } = event.data
      this.$root.$emit('open-error-popup', { errorType, errorMessage })
    },
    messageHandler (event) {
      const { messageType, messageText } = event.data
      this.$root.$emit('open-message-popup', { messageType, messageText })
    }
  },
  mounted () {
    this.$root.$on('progress-event', function (event) {
      this.progress = event.progress
    }.bind(this))

    this.__worker.addEventListener('message', function (event) {
      const { status, action, result, credentials } = event.data
      if (status === '300') return
      if (action === 'redirect') {
        const { role, _id } = result.data
        credentialsHandler(credentials)
        userIdHandler(_id)
        roleHandler(role)

        this.calculatorDisabled = false

        // this.$router.push({ name: 'dgtek-calculator' })
        this.$router.push({ name: 'partner' })
      }

      event.data.error && this.errorHandler(event)
      event.data.message && this.messageHandler(event)
    }.bind(this))
  }
}
</script>

<style>
/* * {
  user-select: none;
  outline: none;
} */

input, textarea {
  user-select: text;
  -webkit-user-select: text;
}

.main-header{
  font-weight: 900;
}

.v-application {
  font-family: 'Gilroy' !important;
}

.theme--light.v-stepper {
  background: #fbfbfb;
  box-shadow: none;
}

@media screen and (max-width: 420px) {
  .main-header {
    font-size: 16px;
  }
}
</style>
