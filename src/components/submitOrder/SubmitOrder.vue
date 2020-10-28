<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab>Edit/send MSA</v-tab>
      <v-tab>Create new service order form</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item  transition="false" reverse-transition="false">
        <SendMsa />
      </v-tab-item>
      <v-tab-item transition="false" reverse-transition="false">
        <CreateNewService />
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>

<script>
import SendMsa from './SendMsa'
import CreateNewService from './CreateNewService'

export default {
  name: 'submit-order',
  components: {
    SendMsa,
    CreateNewService,
  },
  data () {
    return {
       tab: 1,
    }
  }
};
</script>

<style>
</style>