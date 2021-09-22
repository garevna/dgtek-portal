import { secretHandler, credentialsHandler } from './env'
import { emptyData, secretError, encryptError, decryptError } from '../configs'

// const crypto = require('crypto-js')

const AES = require('crypto-js/aes')
const SHA256 = require('crypto-js/sha256')
const encUtf8 = require('crypto-js/enc-utf8')

const hash = data => ({ status: 200, result: /* crypto. */ SHA256(data).toString() })

const encrypt = (data) => {
  const action = 'encrypt'
  if (!data) return { status: 422, action, result: emptyData }

  if (!secretHandler()) return { status: 500, action, result: secretError }

  const result = /* crypto. */ AES.encrypt(data, secretHandler()).toString()

  // self.postMessage({ status: 300, credentials: result })

  credentialsHandler(result)

  return result ? { status: 200, action, result } : { status: 500, action, result: encryptError }
}

const decrypt = (ciphertext) => {
  const action = 'decrypt'
  if (!ciphertext) return { status: 422, action, result: emptyData }

  if (!secretHandler()) return { status: 500, action, result: secretError }

  const bytes = /* crypto. */ AES.decrypt(ciphertext, secretHandler())
  // const text = bytes.toString(crypto.enc.Utf8)
  const text = bytes.toString(encUtf8)

  const result = text.match(/[[]{}]+/g) ? JSON.parse(text) : text

  return result ? { status: 200, action, result } : { status: 500, action, result: decryptError }
}

export {
  hash,
  encrypt,
  decrypt
}
