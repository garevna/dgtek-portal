<template>
  <v-card flat class="services pt-8">
    <v-container fluid>
      <v-row justify="center">
        <v-card width="80%" flat class="transparent card-wrapp">
          <router-link
            to="/services"
          >
            <span>Services</span>
          </router-link>
        </v-card>
        <v-card flat class="transparent">
          <v-card-title>
            <h1>{{ service.serviceName }}</h1>
          </v-card-title>
        </v-card>
        <v-col cols="12" lg="10" xl="8">
          <v-row align="start" justify="center">
            <v-col cols="12" lg="6">
              <v-card flat class="d-flex justify-center transparent">
                <table>
                  <tr class="pa-4">
                    <td>Service type</td>
                    <td>{{ service.serviceType }}</td>
                  </tr>
                  <tr>
                    <td>Service description</td>
                    <td>{{ service.serviceDescription }}</td>
                  </tr>
                  <tr v-if="service.serviceSLA">
                    <td>Service SLA</td>
                    <!-- link to file -->
                    <td>
                      <a :href="`/${service.serviceSLA}`" download >
                        {{ service.serviceSLA }}
                      </a>
                    </td>
                  </tr>
                  <tr v-if="service.serviceName">
                    <td>Service name</td>
                    <td>{{ service.serviceName }}</td>
                  </tr>
                  <tr v-if="service.downstreamSpeed">
                    <td>Downstream speed</td>
                    <td>{{ service.downstreamSpeed }}</td>
                  </tr>
                  <tr v-if="service.upstreamSpeed">
                    <td>Upstream speed</td>
                    <td>{{ service.upstreamSpeed }}</td>
                  </tr>
                  <tr v-if="service.dataLimit">
                    <td>Data limit</td>
                    <td>{{ service.dataLimit }}</td>
                  </tr>
                  <tr v-if="service.NRC">
                    <td>NRC</td>
                    <td>{{ service.NRC }}</td>
                  </tr>
                  <tr v-if="service.MRC">
                    <td>MRC</td>
                    <td>{{ service.MRC }}</td>
                  </tr>
                </table>
              </v-card>
            </v-col>
            <v-col cols="12" lg="6">
              <v-card flat class="d-flex justify-center transparent">
                <table>
                  <tr>
                    <td>Equipment cost</td>
                    <td>{{ service.equipmentCost }}</td>
                  </tr>
                  <tr>
                    <td>Equipment required</td>
                    <td>{{ equipmentRequired }}</td>
                  </tr>
                  <tr>
                    <td>Equipment type</td>
                    <td>{{ service.equipmentType }}</td>
                  </tr>
                  <tr>
                    <td>Contract term</td>
                    <td>{{ service.contractTerm }}</td>
                  </tr>
                  <tr>
                    <td>Free trial</td>
                    <td>{{ service.freeTrial }}</td>
                  </tr>
                  <tr v-if="service.discountOnNRC">
                    <td>Discount on NRC</td>
                    <td>{{ service.discountOnNRC }}</td>
                  </tr>
                  <tr v-if="service.discountOnMRC">
                    <td>Discount on MRC</td>
                    <td>{{ service.discountOnMRC }}</td>
                  </tr>
                  <tr v-if="service.numberOfUsersPerPartner">
                    <td>Number of users per partner</td>
                    <td>{{ service.numberOfUsersPerPartner }}</td>
                  </tr>
                  <tr>
                    <td>GST inc/ex</td>
                    <td>{{ service.GST_inc_ex }}</td>
                  </tr>
                </table>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped>
  @import '@/sass/_variables';
  .container {
    width: 100%;
    padding-right: 15px !important;
    padding-left: 15px !important;
    margin-right: auto;
    margin-left: auto;
  }
  h1{
    color: #000;
  }
  table{
    border: solid 1px #000;
  }
  td {
    border: solid 1px #000;
    width: 250px;
    color: #000;
  }
</style>

<script>
import services from '@/components/services/mockData'
import links from '@/components/services/mockLinks'

export default {
  name: 'Service',
  components: {},
  data () {
    return {
      serviceSlug: this.$route.params.serviceSlug,
      services,
      service: null,
      links,
      link: null
    }
  },
  computed: {
    equipmentRequired () {
      if (this.service.equipmentRequired === true) return 'Yes'
      if (this.service.equipmentRequired === false) return 'No'
      return ''
    }
  },
  watch: {},
  methods: {
    indexLink (i) {
      return i % links.length
    }
  },
  beforeMount () {
    this.service = services[this.$route.params.serviceSlug]
    this.link = links[this.indexLink(this.$route.params.serviceSlug)]
  }
}
</script>
