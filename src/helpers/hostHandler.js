export const hostHandler = (function () {
  let host = 'https://portal.dgtek.net'
  return function (value) {
    if (!value) return host
    host = value
  }
})()
