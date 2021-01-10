<template>
<v-card flat class="wrap py-8">
  <v-card-actions class="py-4 btn-container transparent">
    <v-btn color="primary" @click="sendData('print')" class="btn mr-2">PRINT</v-btn>
    <v-btn color="primary" @click="sendData('save')" class="btn mr-2">SAVE</v-btn>
    <v-btn color="primary" @click="sendData('email')" class="btn">SAVE & EMAIL</v-btn>
  </v-card-actions>
  <v-card flat class="transparent pt-8">
    <v-btn
      outlined
      color="primary"
      class="btn btn-back"
      @click="back"
    >
        BACK
    </v-btn>
  </v-card>
</v-card>
</template>

<style scoped lang="scss">

.btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F3F3F3!important;
}
.btn-container .btn{
  position: relative;
  width: 150px;
}
</style>

<script>
export default {
  name: 'Step3',

  props: ['back', 'sendData'],

  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>
