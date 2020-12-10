<template >
  <v-card flat class="menu-wrapp d-flex flex-column">
    <v-btn
      class="main-menu"
      depressed
      :class="{ active: activeBtn === index }"
      v-for="(service, index) in services"
      :key="service.service"
      @click="
        open(index);
        activeBtn = index;
      "
    >
      {{ service.text }}
    </v-btn>
  </v-card>
</template>

<style lang="scss">
@import "@/sass/_variables.scss";
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
    services: [
      {
        service: 'submit order',
        text: 'submit order',
        popup: 'submitOrderPopup'
      },
      {
        service: 'service qualification',
        text: 'service qualification',
        popup: 'service-qualification'
      },
      {
        service: 'documents',
        text: 'documents',
        popup: 'service-qualification'
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
