const secretHandler = (function () {
  const secret = process.env.VUE_APP_SECRET
  return function () {
    return secret
  }
})()

const config = {
  apiSecret: secretHandler
}

export {
  config
}

export default {
  install (Vue) {
    Vue.appConfig = config
    Vue.apiSecret = secretHandler
    Vue.prototype.$appConfig = config
    Vue.prototype.$apiSecret = secretHandler
  }
}
