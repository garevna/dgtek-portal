export const roleHandler = (function () {
  let role = 'visitor'
  return function (value) {
    if (!value) return role
    role = value
  }
})()
