<template >
  <v-card flat max-width="185px">
    <v-btn
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
export default {
  data: () => ({
  servises: [
    {
      servise: 'submit order',
      text: 'submit order'
    },
    {
      servise: 'service qualification',
      text: 'service qualification'
    },
    {
      servise: 'documents',
      text: 'documents'
    },
    {
      servise: 'lorem',
      text: 'lorem ips'
    },
    {
      servise: 'lorem1',
      text: 'lorem ips'
    },
    {
      servise: 'lorem2',
      text: 'lorem ips'
    },
    {
      servise: 'lorem3',
      text: 'lorem ips'
    },
    {
      servise: 'lorem4',
      text: 'lorem ips'
    },
  ]
}),
  computed: {
    //
  }
}
</script>