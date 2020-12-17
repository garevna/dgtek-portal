<template>
  <v-card flat class="transparent">
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="active-chip buttons white--text transparent"
        column
      >
      <v-chip
        label
        v-for="type in types"
        :key="type"
        @click="showServise(type)"
        class="px-0 transparent"
      >{{ type }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>

</template>

<style lang="scss" scoped>
.v-chip{
  justify-content: center;
  width: 200px;
}
.v-chip.v-size--default{
  font-size: 16px!important;
}
.active-chip{
  border-radius: 0!important;
}
</style>

<script>
export default {
  props: ['types', 'select'],
  name: 'TypeSwich',
  components: {
  },
  data () {
    return {
      selection: 0
    }
  },
  computed: {
    typeSelect: {
      get: function () { return this.select },
      set: function (val) { this.$emit('update:select', val) }
    }
  },
  methods: {
    showServise (type) {
      this.typeSelect = type
    }
  },
  mounted () {
  }
}
</script>
