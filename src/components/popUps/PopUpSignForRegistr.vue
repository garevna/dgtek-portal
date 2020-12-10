<template>
  <v-dialog v-model="dialog" max-width="400">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> Open Dialog </v-btn>
    </template>
    <v-card :loading="loading" ref="cardPopup">
      <v-btn icon dark @click="dialog = false" class="btn-close">
        <v-icon large>mdi-close</v-icon>
      </v-btn>
      <v-tabs v-model="tab">
        <v-tab>Sign in</v-tab>
        <v-tab>Leads request</v-tab>
      </v-tabs>
      <v-tabs-items class="tab-items" v-model="tab">
        <v-tab-item>
          <SignIn />
        </v-tab-item>
        <v-tab-item>
          <SignUp />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.v-tab.v-tab {
  width: 100%;
}
.wrapp {
  position: relative;
}
.btn-close {
  position: absolute;
  top: -35px;
  right: -45px;
  z-index: 500;
}
.v-slide-group__content {
  justify-content: center;
}
.tab-items {
  padding: 20px;
}
</style>

<script>
import { mapState } from 'vuex'

import SignIn from '@/components/popUps/SignIn.vue'
import SignUp from '@/components/popUps/SignUp.vue'
export default {
  name: 'PopUpSignForRegistr',
  props: ['show'],
  components: {
    SignIn,
    SignUp
  },
  data () {
    return {
      tab: 0
    }
  },
  computed: {
    ...mapState('auth', ['loading']),
    dialog: {
      get: function () {
        return this.show
      },
      set: function (val) {
        this.$emit('update:show', val)
      }
    }
  },
  watch: {
    loading (val) {
      if (val) return
      this.dialog = false
    }
  }
}
</script>
