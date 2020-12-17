<template>
  <v-hover
    v-slot="{ hover }"
    close-delay="200"
    open-delay="100"
  >
    <v-card
      :elevation="hover ? 16 : 2"
      width="250px"
      height="300px"
      @click.stop="toService()"
    >
      <!-- <v-img v-if="img" class="red-icons" :src="img" height="120px" position="left"></v-img> -->

      <v-card flat v-if="type === 'Commercial' || type === 'Residential'" class="text-center transparent pt-5">
        <v-card-title v-if="service.serviceName" class="justify-center">
          <p class="service-name">{{ service.serviceName }}</p>
        </v-card-title>
        <v-card-text v-if="service.equipmentCost">
          <p>
            <span class="dollar pr-6 primary--text">{{ service.equipmentCost }}</span>
            <span class="month primary--text">/mo</span>
          </p>
        </v-card-text>
        <v-card-text v-if="service.serviceName">
          <!-- arrow up -->
          <p>{{ service.upstreamSpeed }} Mbps Upload</p>
        </v-card-text>
        <v-card-text v-if="service.serviceName">
          <!-- arrow down -->
          <p>{{ service.downstreamSpeed }} Mbps Download</p>
        </v-card-text>
        <v-card-text v-if="!service.serviceName">
          <p class="items-text">{{ service.serviceDescription }}</p>
        </v-card-text>
      </v-card>

      <v-card flat v-if="type === 'Other services'" class="text-center transparent">
        <v-card-title class="justify-center">
          <p>{{ service.serviceName }}</p>
        </v-card-title>
        <v-card-text v-if="service.discountOnNRC">
          <p>NRC {{ service.discountOnNRC }}</p>
        </v-card-text>
        <v-card-text v-if="service.discountOnMRC">
          <p>MRC {{ service.discountOnMRC }}</p>
        </v-card-text>
        <v-card-text>
          <p>{{ service.serviceDescription }}</p>
        </v-card-text>
      </v-card>

      <v-card flat v-if="type === 'P2P'" class="text-center transparent">
        <v-card-title v-if="service.serviceName" class="justify-center">
          <p>{{ service.serviceName }}</p>
        </v-card-title>
        <v-card-text v-if="service.serviceName">
          <p>{{ service.upstreamSpeed }} Mbps Upload</p>
        </v-card-text>
        <v-card-text v-if="service.serviceName">
          <p>{{ service.downstreamSpeed }} Mbps Download</p>
        </v-card-text>
        <v-card-text v-if="!service.serviceName">
          <p>NRC {{ service.discountOnNRC }}</p>
        </v-card-text>
        <v-card-text v-if="!service.serviceName">
          <p>MRC {{ service.discountOnMRC }}</p>
        </v-card-text>
        <v-card-text v-if="!service.serviceName">
          <p class="items-text">{{ service.serviceDescription }}</p>
        </v-card-text>
      </v-card>

      <v-card flat v-if="type === 'Colocation'" class="text-center transparent">
        <v-card-title class="justify-center">
          <p>MRC {{ service.discountOnMRC }}</p>
        </v-card-title>
        <v-card-text>
          <p>{{ service.serviceDescription }}</p>
        </v-card-text>
      </v-card>
    </v-card>
  </v-hover>
</template>

<style lang="scss" scoped>
// @import "@/sass/variables.scss";
// .description {
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 4;
//   -webkit-box-orient: vertical;
// }
// .service-name {
//   font-size: 16px;
//   color: $secondary;
// }
.dollar {
  position: relative;
  font-size: 30px;
  // color: $primary;
  // padding-right: 25px;
}
.month{
  font-size: 16px;
  // color: $primary;
}
.dollar::after {
  content: "\0024";
  font-size: 22px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: $primary;
  right: 0;
}
// .dollar::before {
//   content: "";
//   width: 2px;
//   height: 25px;
//   position: absolute;
//   transform: rotate(45deg);
//   top: 0;
//   left:25px;
//   background-color: $secondary;
// }
.cards {
  width: 100%;
  // height: max-content;
  border-radius: 15px;
}
</style>

<script>
export default {
  props: ['service', 'img', 'slug', 'type'],
  name: 'ServiceCard',
  components: {
    //
  },
  data () {
    return {
    }
  },
  computed: {
    equipmentRequired () {
      if (this.service.equipmentRequired === true) return 'Yes'
      if (this.service.equipmentRequired === false) return 'No'
      return ''
    }
  },
  methods: {
    toService () {
      this.$router.push({
        name: 'Service',
        params: { serviceSlug: this.slug }
      })
    }
  },
  mounted () {
    // console.log(this.service)
  }
}
</script>
