import { patterns, states } from './'
import { validateABN } from '../helpers'

export const rules = {
  required: value => !!value || 'Required.',
  'simple-text': value => true,
  number: value => value ? patterns.number.test(value) || 'Invalid number.' : true,
  phone: value => value ? patterns.phone.test(value) || 'Invalid phone number.' : true,
  mobile: value => value ? patterns.mobile.test(value) || 'Invalid mobile phone number.' : true,
  email: value => value ? patterns.email.test(value) || 'Invalid e-mail.' : true,
  state: value => value ? states.indexOf(value) !== -1 || 'Invalid state.' : true,
  postcode: value => value ? patterns.postcode.test(value) || 'Invalid state.' : true,
  abn: value => validateABN(value) || 'Invalid ABN.',
  url: value => value ? patterns.url.test(value) || 'Invalid URL.' : true,
  password: value => value ? patterns.password.test(value) || 'Password is not strong enough.' : true
}
