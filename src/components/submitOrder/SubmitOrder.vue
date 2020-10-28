<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab>Edit/send MSA</v-tab>
      <v-tab>Create new service order form</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item  transition="false" reverse-transition="false">
        <SendMsa v-if="tab === 0"/>
      </v-tab-item>
      <v-tab-item transition="false" reverse-transition="false">
        <CreateNewService
          v-if="tab === 1" 
          :loadData.sync="createNewServiceData"
          :saveData="saveDataNewService"
        />
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>

<script>
import SendMsa from './SendMsa'
import CreateNewService from './CreateNewService'

export default {
  name: 'submit-order',
  props: ['loadData', 'saveData'],
  components: {
    SendMsa,
    CreateNewService,
  },
  data () {
    return {
       tab: 1,
       createNewServiceData: null
    }
  },
  methods: {
    saveDataNewService (data) {
      this.createNewServiceData = data.createNewServiceData
    },
    loadFields () {
      if (!this.loadData) return
      this.tab = this.loadData.tab
      this.createNewServiceData = this.loadData.createNewServiceData
    },
    saveFields () {
      const data = {
        tab: this.tab,
        createNewServiceData: this.createNewServiceData,
        }
      this.saveData(data)
    }
  },
  beforeMount () {
    console.log('beforeMount submit-order')
    // this.loadFields()
  },
  beforeDestroy () {
    console.log('beforeDestroy submit-order')
    // this.saveFields()
  }
};
</script>

<style>
</style>