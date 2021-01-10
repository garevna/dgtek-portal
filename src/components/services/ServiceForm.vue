<template>
  <v-container class="homefone">
    <v-row
      v-for="item in service"
      :key="item.label"
      justify="center"
    >
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <v-row v-if="item.type === 'string' || item.type === 'number'" dense style="line-height: 0!important">
          <v-col>{{ item.label }}</v-col>
          <v-col><b>{{ item.value }}</b></v-col>
        </v-row>
        <!-- <v-text-field
          v-if="item.type === 'string' || item.type === 'number'"
          :value="item.value"
          :label="item.label"
          v-model="item.value"
          readonly
          dense
        ></v-text-field> -->
        <v-checkbox
          v-if="item.type === 'boolean'"
          :value="item.value"
          :label="item.label"
          v-model="item.value"
          readonly
        ></v-checkbox>
        <ShowPDF v-if="item.type==='file'" :fileData="item.value" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  props: ['id', 'service'],
  components: {
    ShowPDF: () => import('@/components/ShowPDF.vue')
  }
}
</script>
