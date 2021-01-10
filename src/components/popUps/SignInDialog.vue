<template>
  <v-container fluid style="position: absolute; inset:0; z-index: 999; background-color: #0007">
    <v-row align="center" justify="center" style="height: 100%">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <v-toolbar flat class="transparent" max-width="580">
          <v-spacer></v-spacer>
          <v-btn icon @click="$emit('update:dialog', false)" class="transparent">
            <v-icon large color="#fff">mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card max-width="400" max-height="70%" class="ma-auto">
          <v-tabs v-model="tab">
            <v-tab>Sign in</v-tab>
            <v-tab>Leads request</v-tab>
          </v-tabs>
          <v-tabs-items class="pa-5" v-model="tab">
            <v-tab-item>
              <SignIn />
            </v-tab-item>
            <v-tab-item>
              <SignUp />
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.no-shadow {
  box-shadow: none !important;
}
</style>

<style scoped>
.v-tab.v-tab {
  width: 100%;
}
/* .v-slide-group__content {
  justify-content: center;
}
.tab-items {
  padding: 20px;
} */
</style>

<script>
import { mapState } from 'vuex'

import SignIn from '@/components/popUps/SignIn.vue'
import SignUp from '@/components/popUps/SignUp.vue'
export default {
  name: 'SignInDialog',
  props: ['dialog'],
  components: {
    SignIn,
    SignUp
  },
  data: () => ({
    tab: 0
  }),
  computed: {
    ...mapState('auth', ['loading'])
  },
  watch: {
    loading (val) {
      if (val) return
      this.dialog = false
    }
  }
}
</script>
