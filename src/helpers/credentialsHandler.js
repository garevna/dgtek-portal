export const credentialsHandler = (function () {
  let creds = ''
  return function (value) {
    if (!value) return creds
    creds = value
  }
})()
