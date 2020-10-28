// import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

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
        primary: '#58120E',
        secondary: '#881F1A',
        background: '#424242',
        lightgrey: '#F3F3F3',
        darktext: '#000',
        lighttext: '#CCCCCC',
        linecolor: '#C1C1C1',
        white: '#FFF',
      },
      dark: {
        primary: '#FFC44A',
        secondary: '#dde',
        darkGrey: '#333333',
        buttons: '#FFC44A',
        homefone: '#262624',
        warning: '#FAFF00',
        substrate: '#F4F4F4',
        lightFont: '#808080',
        coursesGray: '#4D4D4D',
      },
    },
  },
});
