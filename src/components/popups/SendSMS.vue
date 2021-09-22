<template>
  <v-row justify="end" class="mx-0" :style="{ position: 'fixed', bottom: bottom, right: right, transition: 'bottom .5s' }">
    <div>
      <v-sheet width="360" class="transparent text-left" style="margin-bottom: -48px">
        <v-btn outlined icon color="primary" style="background: #fbfbfb90;">
          <v-icon v-if="show" @click="show = false">
            mdi-chevron-double-right
          </v-icon>
          <v-icon v-else @click="show = true">
            mdi-chevron-double-left
          </v-icon>
        </v-btn>
      </v-sheet>
      <v-sheet
        class="mr-0 ml-12 pa-2"
        elevation="4"
        width="320"
        height="520"
        color="#fbfbfb"
      >
        <p v-if="address" class="ml-2">
          <v-icon small class="mr-2">mdi-map</v-icon>
          <small><b>{{ address }}</b></small>
        </p>

        <v-text-field
          v-model="phone"
          outlined
          dense
          label="Customer phone number"
          prepend-icon="mdi-phone"
          hide-details
        />
        <p class="mt-3 mb-0"><small><b> SMS to customer </b></small></p>
        <v-radio-group v-model="message">
          <v-radio
            v-for="(item, index) of variants"
            :key="index"
            :label="item"
            :value="item"
            class="px-2"
            style="border: solid 1px #777; border-radius: 4px"
            hide-details
          ></v-radio>
        </v-radio-group>

        <v-btn text @click="send" :disabled="!phone || !message">
          <v-icon color="primary" class="mr-2">mdi-send</v-icon>
          Send
        </v-btn>
      </v-sheet>
    </div>
  </v-row>
</template>

<script>

import { apiHandler, credentialsHandler } from '@/helpers'

export default {
  name: 'SendSMS',

  data: () => ({
    show: true,
    address: '',
    phone: '',
    message: '',
    variants: [
      'There is an error in the network.\nOur tech support will contact you shortly.',
      `We did not find a fault in the network.\n
       It is likely that the issue is related to the customer premises equipment or a mistake in credentials.\n
       Please provide us with your email address and contact Technical Support on 1300 857 501.\n
       Technical Support will help you troubleshoot the issue over the phone as well as send you instructions via email.`
    ],
    credentials: credentialsHandler()
  }),
  computed: {
    right () {
      return this.show ? '0' : '-320px'
    },
    bottom () {
      return this.show ? '0' : '-420px'
    }
  },
  methods: {
    async send () {
      const message = this.address ? `${this.address}\n\n${this.message}` : this.message

      const response = await (await fetch(`${apiHandler()}/send-sms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: this.$apiKey(),
          Credentials: this.credentials
        },
        body: JSON.stringify({
          message: `DGtek customer service\n\n${message}`,
          phoneNumber: this.phone
        })
      }))

      if (response.status === 200) {
        this.$emit('open-error-popup', {
          errorType: 'Access denied',
          errorMessage: 'You have no rights to perform this action'
        })
      }
      this.resetMessage()
    },
    resetMessage () {
      this.address = ''
      this.phone = ''
      this.message = ''
    }
  },

  mounted () {
    const telegramBotCode = location.hash.slice(1)

    this.credentials = telegramBotCode === this.$botCode() ? this.$adminCreds() : credentialsHandler()

    if (location.search) {
      const result = location.search.slice(1)
        .split('&')
        .map(item => item.split('='))
        .reduce((result, item) => Object.assign(result, { [item[0]]: decodeURI(item[1]) }), {})

      this.phone = result.phone || ''
      this.address = result.address || ''
      this.address = this.address.split('%2F').join('/')
    }
  }
}
</script>

<style>
.v-application--is-ltr .v-input--selection-controls__input {
  margin-right: 16px !important;
}

.v-label {
  font-size: 12px;
}
</style>
