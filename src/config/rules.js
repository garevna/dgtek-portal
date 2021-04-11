import { patterns, states } from './'
import { validateABN } from '../helpers'

export const rules = {
  required: value => !!value || 'Required.',
  'simple-text': value => !!value,
  number: value => patterns.number.test(value) || 'Invalid number.',
  phone: value => patterns.phone.test(value) || 'Invalid phone number.',
  mobile: value => patterns.mobile.test(value) || 'Invalid mobile phone number.',
  email: value => patterns.email.test(value) || 'Invalid e-mail.',
  state: value => states.indexOf(value) !== -1 || 'Invalid state.',
  postcode: value => patterns.postcode.test(value) || 'Invalid state.',
  abn: value => validateABN(value) || 'Invalid ABN.',
  url: value => patterns.url.test(value) || 'Invalid URL.',
  password: value => patterns.password.test(value) || 'Password is not strong enough.'
}
