import Vue from 'vue'

import configPlugin from '../config'

Vue.use(configPlugin)

const readyCallback = function (event) {
  if (event.data.action !== 'init') return console.warn('Callback has not been removed')
  Vue.prototype.__worker.ready = event.data.status === 200
  Vue.prototype.__worker.removeEventListener('message', readyCallback)
}

const path = location.href.indexOf('dgtek-portal') > 0 ? 'dgtek-portal/' : ''
Vue.prototype.__worker = new Worker(`/${path}portal.worker.js`)

Vue.prototype.__worker.addEventListener('message', readyCallback)

Vue.prototype.__worker.postMessage({
  action: 'init',
  host: Vue.prototype.$apiHost(),
  key: Vue.prototype.$apiKey(),
  secret: Vue.prototype.$apiSecret()
})

Vue.prototype.$openExternalLink = function (url) {
  window.open(url, '_blank')
}

export default Vue
