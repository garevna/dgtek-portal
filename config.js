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

const telegramBotCodeHandler = (function () {
  const code = process.env.VUE_APP_TELEGRAM_CODE
  return function () {
    return code
  }
})()

const adminCredentialsHandler = (function () {
  const cred = process.env.VUE_APP_ADMIN_CREDENTIALS
  return function () {
    return cred
  }
})()

const config = {
  apiSecret: secretHandler,
  apiHost: hostHandler,
  apiKey: apiKeyHandler,
  botCode: telegramBotCodeHandler,
  adminCreds: adminCredentialsHandler
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
    Vue.botCode = telegramBotCodeHandler
    Vue.adminCreds = adminCredentialsHandler
    Vue.prototype.$appConfig = config
    Vue.prototype.$apiSecret = secretHandler
    Vue.prototype.$apiKey = apiKeyHandler
    Vue.prototype.$apiHost = hostHandler
    Vue.prototype.$botCode = telegramBotCodeHandler
    Vue.prototype.$adminCreds = adminCredentialsHandler
  }
}
