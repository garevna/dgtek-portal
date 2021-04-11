import { rules } from '@/config'

export const getRegistrationResult = function (data) {
  const result = {}
  let error = false
  for (const sectionName in data) {
    result[sectionName] = {}
    for (const propName in data[sectionName]) {
      let { value, type, required } = data[sectionName][propName]
      const notValid = rules[type] ? typeof rules[type](value) === 'string' : false
      error = error || (required && !value) || notValid
      if (error) break
      value = type === 'phone' || type === 'mobile'
        ? value.split(' ').join('').split('-').join('') : value
      result[sectionName][propName] = type !== 'mobile' ? value : `+61${value}`
    }
  }
  return {
    error,
    result: error ? null : result
  }
}
