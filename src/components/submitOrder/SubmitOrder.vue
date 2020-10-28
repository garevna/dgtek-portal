<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab>Edit/send MSA</v-tab>
      <v-tab>Create new service order form</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item transition="false" reverse-transition="false">
        <SendMsa v-if="tab === 0" />
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

<style lang="scss">
.v-slide-group__content {
  padding-left: 50px;
}
</style>

<script>
import SendMsa from './SendMsa';
import CreateNewService from './CreateNewService';

export default {
  name: 'SubmitOrder',
  props: ['loadData', 'saveData'],
  components: {
    SendMsa,
    CreateNewService,
  },
  data() {
    return {
      tab: 1,
      createNewServiceData: null,
    };
  },
  methods: {
    saveDataNewService(data) {
      if (!this.createNewServiceData) this.createNewServiceData = {};
      this.createNewServiceData = data;
    },
    loadFields() {
      if (!this.loadData) return;
      this.tab = this.loadData.tab;
      this.createNewServiceData = this.loadData.createNewServiceData;
    },
    saveFields() {
      const data = {
        tab: this.tab,
        createNewServiceData: this.createNewServiceData,
      };
      this.saveData(data);
    },
  },
  beforeMount() {
    console.log('beforeMount SubmitOrder');
    // this.loadFields()
  },
  beforeDestroy() {
    console.log('beforeDestroy submit-order');
    // this.saveFields()
  },
};
</script>

<style>
</style>