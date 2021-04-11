import {
  init,
  auth,
  registration,
  passwordReset,
  sendPasswordResetCode,
  changePassword
} from '../helpers'

class AuthController {
  init (request) {
    self.postMessage(init(request))
  }

  async auth (request) {
    self.postMessage(await auth(request.login, request.password))
  }

  async registrate (request) {
    self.postMessage(await registration(request))
  }

  async passwordReset (request) {
    self.postMessage(await passwordReset(request.login))
  }

  async sendPasswordResetCode (request) {
    self.postMessage(await sendPasswordResetCode(request.code))
  }

  async changePassword (request) {
    self.postMessage(await changePassword(request.password))
  }
}

export const authController = new AuthController()
