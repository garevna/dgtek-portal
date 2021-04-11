import { hostHandler, apiKeyHandler } from './env'
import { encrypt, hash } from './'
import { registrationOffline, registrationError } from './errors'

const messageType = 'DGtek Partner registration'
const messageText = 'Process succeed. Please wait for approval'

export const registration = async (payload) => {
  if (!navigator.onLine) return registrationOffline()

  const { action, ...body } = payload

  const { login, password, userPhone: phoneNumber, userName } = body.auth

  const { result: hashPassword } = hash(password)

  const { status, result } = encrypt(JSON.stringify({ login, phoneNumber, userName, password: hashPassword }))

  if (status !== 200) return registrationError()

  body.auth = result

  const response = await fetch(`${hostHandler()}/registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authentification: apiKeyHandler()
    },
    body: JSON.stringify(body)
  })

  // self.postMessage({ status: 300, result: await response.json() })

  return response.status === 200
    ? { status: response.status, action, message: true, messageType, messageText }
    : registrationError(response.status)
}
