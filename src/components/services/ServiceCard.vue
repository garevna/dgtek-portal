<template>
  <v-card
    elevation="5"
    width="300px"
    height="400px"
    @click.stop="toService()"
  >
    <!-- <v-img v-if="img" class="red-icons" :src="img" height="120px" position="left"></v-img> -->

    <v-card flat v-if="type === 'Commercial' || type === 'Residential'" class="text-center transparent">
      <v-card-title v-if="service.serviceName" class="pt-8 pb-16 justify-center">
        <h3 class="service-name">{{ service.serviceName }}</h3>
      </v-card-title>
      <v-card-text v-if="service.equipmentCost">
        <p><span class="dollar">{{ service.equipmentCost }}</span><span class="month">/mo</span></p>
      </v-card-text>
      <v-card-text v-if="service.serviceName">
        <!-- arrow up -->
        <h3>{{ service.upstreamSpeed }} Mbps Upload</h3>
      </v-card-text>
      <v-card-text v-if="service.serviceName">
        <!-- arrow down -->
        <h3>{{ service.downstreamSpeed }} Mbps Download</h3>
      </v-card-text>
      <v-card-text v-if="!service.serviceName">
        <h3 class="items-text">{{ service.serviceDescription }}</h3>
      </v-card-text>
    </v-card>

    <v-card flat v-if="type === 'Other services'" class="text-center transparent">
      <v-card-title class="pt-8 pb-16 justify-center">
        <h3>{{ service.serviceName }}</h3>
      </v-card-title>
      <v-card-text v-if="service.discountOnNRC">
        <h3>NRC {{ service.discountOnNRC }}</h3>
      </v-card-text>
      <v-card-text v-if="service.discountOnMRC">
        <h3>MRC {{ service.discountOnMRC }}</h3>
      </v-card-text>
      <v-card-text>
        <p>{{ service.serviceDescription }}</p>
      </v-card-text>
    </v-card>

    <v-card flat v-if="type === 'P2P'" class="text-center transparent">
      <v-card-title v-if="service.serviceName" class="pt-8 pb-16 justify-center">
        <h3>{{ service.serviceName }}</h3>
      </v-card-title>
      <v-card-text v-if="service.serviceName">
        <h3>{{ service.upstreamSpeed }} Mbps Upload</h3>
      </v-card-text>
      <v-card-text v-if="service.serviceName">
        <h3>{{ service.downstreamSpeed }} Mbps Download</h3>
      </v-card-text>
      <v-card-text v-if="!service.serviceName">
        <h3>NRC {{ service.discountOnNRC }}</h3>
      </v-card-text>
      <v-card-text v-if="!service.serviceName">
        <h3>MRC {{ service.discountOnMRC }}</h3>
      </v-card-text>
      <v-card-text v-if="!service.serviceName">
        <h3 class="items-text">{{ service.serviceDescription }}</h3>
      </v-card-text>
    </v-card>

    <v-card flat v-if="type === 'Colocation'" class="text-center transparent">
      <v-card-title class="pt-8 pb-16 justify-center">
        <h3>MRC {{ service.discountOnMRC }}</h3>
      </v-card-title>
      <v-card-text>
        <p>{{ service.serviceDescription }}</p>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<style lang="scss" scoped>
@import "@/sass/_variables.scss";
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.service-name {
  font-size: 25px;
  // color: $secondary;
}
.dollar {
  position: relative;
  font-size: 40px;
  color: $primary;
  padding-right: 25px;
}
.month{
  font-size: 40px;
  color: $primary;
}
.dollar::after {
  content: "\0024";
  font-size: 40px;
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
