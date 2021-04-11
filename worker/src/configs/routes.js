const { authController } = require('../controllers')

export const routes = {
  init: authController.init,
  auth: authController.auth,
  registrate: authController.registrate,
  reset: authController.passwordReset,
  code: authController.sendPasswordResetCode,
  change: authController.changePassword
}
