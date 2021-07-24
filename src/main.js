import Vue from './vue-extended'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import ErrorMessage from '@/components/popups/error.vue'
import Message from '@/components/popups/message.vue'

import 'dgtek-styles/css/fonts.scss'
import 'dgtek-styles/css/variables.scss'

Vue.config.productionTip = false

Vue.component('error-message', ErrorMessage)
Vue.component('simple-message', Message)

const instance = new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

instance.dispatchProgressEvent = function (value) {
  instance.$emit('progress-event', { progress: value })
}

instance.__worker.dispatchProgressEvent = instance.dispatchProgressEvent

instance.sendMessageToWorker = function (message) {
  instance.dispatchProgressEvent(true)
  instance.__worker.postMessage(message)
}

instance.__worker.onmessage = function (event) {
  this.dispatchProgressEvent(false)
  const { status, action, result, credentials } = event.data

  if (status === 300) {
    event.stopImmediatePropagation()
    // return console.log('WORKER DEBUGGING MESSAGE:\n', event.data)
  }

  if (action === 'init' || status !== 200) return

  if (action === 'redirect') {
    const { role /*, url */ } = result.data
    // const cabinet = `https://portal.dgtek.net/cabinet${url.cabinet.split('/cabinet')[1]}`

    const link = process.env.NODE_ENV === 'production' ? 'https://portal.dgtek.net/rsp/' : 'http://192.168.0.102:8082/'
    // const link = 'https://portal.dgtek.net/reseller-cabinet/'
    const win = window.open(link, '_blank')

    window.onmessage = event => {
      event.data === 'ready' && win.postMessage({ credentials, role }, link)
    }
  }
}

instance.__authorize = function (login, password) {
  if (!login || !password) return
  instance.sendMessageToWorker({ action: 'auth', login, password })
}

instance.__registrate = function (data) {
  instance.sendMessageToWorker({ action: 'registrate', ...data })
}
