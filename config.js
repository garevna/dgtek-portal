const secretHandler = (function () {
  const secret = process.env.VUE_APP_SECRET
  return function () {
    return secret
  }
})()

const hostHandler = (function () {
  const host = process.env.VUE_APP_HOST
  return function () {
    return host
  }
})()

const apiKeyHandler = (function () {
  const key = process.env.VUE_APP_KEY
  return function () {
    return key
  }
})()

const config = {
  apiSecret: secretHandler,
  apiHost: hostHandler,
  apiKey: apiKeyHandler
}

export {
  config
}

export default {
  install (Vue) {
    Vue.appConfig = config
    Vue.apiHost = hostHandler
    Vue.apiSecret = secretHandler
    Vue.apiKey = apiKeyHandler
    Vue.prototype.$appConfig = config
    Vue.prototype.$apiSecret = secretHandler
    Vue.prototype.$apiKey = apiKeyHandler
    Vue.prototype.$apiHost = hostHandler
  }
}
