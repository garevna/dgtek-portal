<template >
  <v-card flat class="transparent menu-wrapp d-flex flex-column">
    <v-btn
      class="main-menu"
      depressed
      :class="{ active: activeBtn === index }"
      v-for="(option, index) in options"
      :key="option.service"
      @click="$router.push({ name: option.goto })"
    >
      {{ option.text }}
    </v-btn>
  </v-card>
</template>

<style lang="scss">

.menu-wrapp {
  & .main-menu {
    background-color: $menu !important;
    color:#fff !important;
  }
  & .active {
    background-color: $active !important;
    border-left: 3px solid #fff;
  }
  & .v-btn__content {
    justify-content: start !important;
  }
}

</style>

<script>
export default {
  props: ['submitOrderPopup'],
  data: () => ({
    activeBtn: 0,
    options: [
      {
        service: 'submit order',
        text: 'Submit Order',
        goto: 'submit'
      },
      {
        service: 'service qualification',
        text: 'Service Qualification',
        goto: 'services'
      },
      {
        service: 'documents',
        text: 'Documents',
        goto: 'documents'
      }
    ]
  }),
  computed: {
  },
  methods: {
    open (index) {
      // this[this.services[index].popup] = true
      this.$emit(`update:${this.services[index].popup}`, true)
    }
  }
}
</script>
