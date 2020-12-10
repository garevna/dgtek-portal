<template>
  <v-container class="px-0">
    <v-row justify="center">
      <v-col cols="12" xs="12" class="d-flex justify-center">
        <TypeSwich :types="types" :select.sync="typeSelect" />
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center"
        v-for="(service, index) in filteredServices"
        :key="index"
      >
        <ServiceCard
          :service="service"
          :slug="service.index"
          :type="typeSelect"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
</style>

<script>
import services from '@/components/services/mockData'
import links from '@/components/services/mockLinks'
import ServiceCard from '@/components/services/ServiceCard'
import TypeSwich from '@/components/services/TypeSwich'

export default {
  name: 'Services',
  components: {
    ServiceCard,
    TypeSwich
  },
  data () {
    return {
      services: services.map((service, index) => {
        service.index = index
        return service
      }),
      links,
      types: [
        'Commercial',
        'Residential',
        'Other services',
        'P2P',
        'Colocation'
      ],
      typeSelect: 'Commercial'
    }
  },
  computed: {
    filteredServices () {
      return this.services.filter(service =>
        service.serviceType
          .toLowerCase()
          .includes(this.typeSelect.toLowerCase())
      )
    }
  },
  methods: {
    indexLink (i) {
      return i % links.length
    }
  }
}
</script>
