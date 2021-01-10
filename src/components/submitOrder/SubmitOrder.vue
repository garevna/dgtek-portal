<template>
  <v-card max-width="900">
    <v-tabs v-model="tab">
      <v-tab disabled>Edit/send MSA</v-tab>
      <v-tab>Create new service order form</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item transition="false" reverse-transition="false">
        <SendMsa />
      </v-tab-item>
      <v-tab-item transition="false" reverse-transition="false">
        <CreateNewService
          :data.sync="createNewServiceData"
        />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<style lang="scss">
.close-icon-wrapper {
  position: absolute;
  top: -25px;
  right: -50px;
  z-index: 500;
}

.close {
  top: 10px;
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: #000;
  transform: rotate(45deg);
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    width: 20px;
    height: 2px;
    background-color: #000;
    transform: rotate(90deg);
  }
}
</style>

<script>
/* eslint-disable no-unused-vars */

export default {
  name: 'SubmitOrder',
  props: ['data', 'close'],
  components: {
    SendMsa: () => import('./SendMsa.vue'),
    CreateNewService: () => import('./CreateNewService.vue')
  },
  data () {
    return {
      tab: 1,
      createNewServiceData: null
    }
  },
  methods: {
    loadFields () {
      if (!this.data) return
      this.tab = this.data.tab
      this.createNewServiceData = this.data.createNewServiceData
    },
    saveFields () {
      const data = {
        tab: this.tab,
        createNewServiceData: this.createNewServiceData
      }
      this.$emit('update:data', data)
    },
    poupClose () {
      this.$emit('update:close', false)
    }
  },
  beforeMount () {
    // this.loadFields()
  },
  destroyed () {
    // this.saveFields()
  }
}
</script>
