export const loginError = function (action) {
  return {
    status: 422,
    action,
    error: true,
    errorType: action === 'reset' ? 'Reset password error' : 'Auth error',
    errorMessage: 'Invalid login'
  }
}
