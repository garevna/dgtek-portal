import { encrypt, /* decrypt, */ hash } from './'
import { hostHandler, apiKeyHandler } from './env'
import { authOffline, authError } from './errors'

export const auth = async (login, password) => {
  if (!navigator.onLine) return authOffline()

  const { status: hashStatus, result: hashResult } = hash(password)

  if (hashStatus !== 200) return authError(500)

  const { status, result } = encrypt(JSON.stringify({ login, password: hashResult }))
  if (status !== 200) return authError(status)

  const response = await fetch(`${hostHandler()}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authentification: apiKeyHandler()
    },
    body: JSON.stringify({ data: result })
  })

  if (response.status === 200) {
    self.postMessage({
      status: response.status,
      message: true,
      messageType: 'DGtek Partner authorization',
      messageText: 'Success'
    })
  }

  return response.status !== 200 ? authError(response.status)
    : ({ status: 200, action: 'redirect', result: await response.json() })
}
