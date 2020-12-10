// import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  // icons: {
  //   iconfont: 'mdi',
  //   values: {
  //     expand: 'mdi-expand-more',
  //     home: 'mdi-home-circle'
  //   }
  // },
  theme: {
    themes: {
      light: {
        primary: '#881F1A',
        secondary: '#E82F37',
        buttons: '#881F1A',
        buttonActive: '#882F1A',
        homefone: '#FEFEFE',
        inputs: '#EFEFEF',
        activefield: '#D9D9D9',
        warning: '#FAFF00'
      },
      dark: {
        primary: '#FF0E00',
        secondary: '#E82F37',
        buttons: '#F54436',
        homefone: '#FEFEFE',
        fields: '#EFEFEF',
        activefield: '#D9D9D9',
        warning: '#FAFF00'
      }
    }
  }
})
