export const apiHandler = (function () {
  let api = 'https://portal.dgtek.net'
  return function (value) {
    if (!value) return api
    api = value
  }
})()
