export const userIdHandler = (function () {
  let id = ''
  return function (value) {
    if (!value) return id
    id = value
  }
})()
