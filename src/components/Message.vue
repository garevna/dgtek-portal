<template>
  <div>
    <v-btn
      v-if="!dialog"
      class="open-message"
      color="primary"
      background-color="primary"
      light
      @click="dialog = true"
    >
      Support
    </v-btn>
    <v-card v-if="dialog" class="dialog pa-4" :loading="sending">
      <v-btn icon @click="dialog = false" class="close-icon-wrapper message">
        <v-icon large>mdi-close</v-icon>
      </v-btn>
      <v-form ref="zendesk">
        <h3>Message for our team</h3>
        <v-text-field
          color="success"
          label="Your name (optional)"
          v-model="name"
        />
        <v-text-field
          color="success"
          label="Your email"
          v-model="email"
          :rules="[rules.required, rules.mail]"
        />
        <v-text-field
          color="success"
          label="Subject"
          v-model="subject"
          :rules="[rules.required]"
        />
        <v-textarea
          color="success"
          label="Description"
          v-model="description"
          :rules="[rules.required]"
          noResize
          rows="5"
        />
      </v-form>
      <div align="right">
        <v-btn
          color="primary"
          class="mt-4"
          background-color="primary"
          light
          @click="send"
        >
          Send
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.open-message {
  position: fixed;
  right: -32px;
  bottom: 139px;
  transform: rotate(-90deg);
}
</style>
<style lang="scss">
.dialog {
  position: fixed;
  width: 300px;
  right: 25px;
  bottom: 100px;
  & .message {
    right: 0;
    top: 0;
  }
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Message',
  data () {
    return {
      dialog: false,
      name: '',
      email: '',
      subject: '',
      description: '',
      rules: {
        required: v => !!v || 'input is required',
        mail: v =>
          /^(\w+\.?\w+\.?\w+?|\d+\.?\d+\.?\d+)([@])(\w+|\d+)\.{1}[a-zA-Z]{2,3}$/.test(
            v
          ) || 'invalid email'
      }
    }
  },
  computed: {
    ...mapState('message', ['error', 'sending'])
  },
  watch: {
    sending (val) {
      if (val) return
      this.dialog = false
      setTimeout(() => {
        this.subject = ''
        this.description = ''
      }, 100)
    }
  },
  methods: {
    send () {
      if (!this.$refs.zendesk.validate()) return
      const data = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        description: this.description
      }
      this.$store.dispatch('message/SEND', data)
    }
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>
