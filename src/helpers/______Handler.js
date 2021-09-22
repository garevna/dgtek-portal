export const apiKeyHandler = (function () {
  let key = ''
  return function (value) {
    if (!value) return key
    key = value
  }
})()
