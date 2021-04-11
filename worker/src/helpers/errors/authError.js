export const authError = function (status) {
  return {
    status,
    action: 'auth',
    error: true,
    errorType: 'Authorization',
    errorMessage: 'Invalid login or password'
  }
}
