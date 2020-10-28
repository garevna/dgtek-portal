<template>
  <v-card flat max-width="185px">
    <v-btn
      dark
      depressed 
      color="primary" 
      width="100%" 
      v-for="servise in servises" :key="servise.servise"
    >
    {{ servise.text }}
    </v-btn>
  </v-card> 
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapState('main.menu', ['servises'])
  }
}
</script>