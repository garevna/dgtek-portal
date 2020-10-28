<template>
  <v-row>
    <v-col>
      <v-card flat max-width="185px">
        <v-btn 
          depressed 
          color="primary" 
          width="100%" 
          v-for="button in buttons" :key="button.item"
        >
        {{ button.text }}
        </v-btn>
      </v-card> 
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapState('main.menu', ['buttons'])
  }
}
</script>