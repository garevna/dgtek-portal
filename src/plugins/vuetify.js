// import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      accept: 'mdi-lan-connect',
      accounts: 'mdi-account-box-multiple',
      archive: 'mdi-archive',
      add: 'mdi-note-plus',
      bills: 'mdi-wallet',
      block: 'mdi-checkbox-blank',
      buildings: 'mdi-home-city-outline',
      case: 'mdi-briefcase-variant',
      chat: 'mdi-account-voice',
      common: 'mdi-ballot',
      connection: 'mdi-lan-pending',
      connectivity: 'mdi-connection',
      customers: 'mdi-text-account',
      diagnostics: 'mdi-marker-check',
      edit: 'mdi-pencil',
      empty: 'mdi-checkbox-blank-outline',
      error: 'mdi-alert',
      delete: 'mdi-trash-can',
      dropdown: 'mdi-menu-down',
      face: 'mdi-account-circle',
      generalDescription: 'mdi-file-table',
      infrastructure: 'mdi-pencil-ruler',
      instruments: 'mdi-hammer-screwdriver',
      list: 'mdi-view-list',
      map: 'mdi-map',
      marker: 'mdi-map-marker',
      menu: 'mdi-dots-vertical',
      message: 'mdi-message-reply-text',
      messageFrom: 'mdi-message-arrow-right',
      messageTo: 'mdi-message-arrow-left',
      orders: 'mdi-printer',
      other: 'mdi-folder-table',
      partner: 'mdi-handshake-outline',
      pdf: 'mdi-file-pdf',
      profile: 'mdi-badge-account-horizontal',
      reject: 'mdi-lan-disconnect',
      registration: 'mdi-account-clock',
      rightArrow: 'mdi-arrow-right-bold',
      rsp: 'mdi-briefcase-account',
      save: 'mdi-content-save',
      send: 'mdi-send',
      services: 'mdi-apps-box',
      tariff: 'mdi-view-split-vertical',
      tickets: 'mdi-card-text',
      traffic: 'mdi-access-point-network',
      tutorials: 'mdi-video-box',
      upload: 'mdi-file-upload',
      window: 'mdi-open-in-new'
    }
  },
  theme: {
    themes: {
      light: {
        primary: '#881F1A',
        secondary: '#E82F37',
        buttons: '#881F1A',
        buttonActive: '#882F1A',
        homefone: '#FBFBFB',
        accent: '#f3f3f3',
        inputs: '#EFEFEF',
        activefield: '#D9D9D9',
        warning: '#FAFF00',
        info: '#fbfbfb'
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
