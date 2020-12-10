<template>
  <v-app class="transparent">
    <Header :signCallback="signCallback" />
    <v-main class="">
      <v-container fluid class="main-content">
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
    <PopUpSign v-if="showPopUpSign" :show.sync="showPopUpSign" />
    <Message v-if="this.$route.name !== 'NotFound'" />
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="color" top>
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
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

<style lang="scss">
@import '@/sass/main.scss';
.main-content {
  padding-top: 50px !important;
}
.vue-notification {
  background-color: #65a368 !important;
  padding: 5px;
  margin: 10px 0 0 0;
  font-size: 16px;
  border-left: none;
  text-align: center;
  // border-radius: 5px;
  font-family: 'Gilroy' !important;
  font-weight: 700;
  &.error {
    background: #e82f37;
  }
}
.v-dialog .v-slide-group__content {
  padding-left: 0 !important;
}
.v-dialog {
  overflow-y: unset !important;
}
.v-slide-group__content {
  padding-left: 50px;
}
</style>

<script>
import { mapState } from 'vuex'

import Header from '@/components/Header'
import PopUpSign from '@/components/popUps/PopUpSignForRegistr'
import Message from '@/components/Message'
import Footer from '@/components/Footer'

import 'dgtek-styles'

export default {
  name: 'App',

  components: {
    Header,
    PopUpSign,
    Message,
    Footer
  },

  data: () => ({
    showPopUpSign: false,
    snackbar: false,
    text: '',
    timeout: 8000,
    color: 'green'
  }),
  computed: {
    ...mapState('auth', ['authError', 'authMessage']),
    ...mapState('message', ['error', 'sending']),
    ...mapState('registration', ['registeredError', 'registeredSending'])
  },
  watch: {
    authError (val) {
      if (!val) return
      this.text = val
      this.color = 'red'
      this.snackbar = true
    },
    sending (val) {
      if (val) return
      if (this.error) {
        this.text = 'Error sending message.'
        this.color = 'red'
        this.snackbar = true
      } else {
        this.text = 'Message sent successfully!'
        this.color = 'green'
        this.snackbar = true
      }
    },
    authMessage (val) {
      if (!val) return
      this.text = val
      this.color = 'green'
      this.snackbar = true
    },
    registeredSending (val) {
      if (val) return
      if (this.registeredError) {
        this.text = this.registeredError
        this.color = 'red'
        this.snackbar = true
      } else {
        this.text = 'Registration data sent successfully!'
        this.color = 'green'
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
