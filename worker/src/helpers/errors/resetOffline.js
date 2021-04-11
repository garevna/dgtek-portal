export const resetOffline = function () {
  return {
    status: 0,
    action: 'reset',
    error: true,
    errorType: 'Reset password',
    errorMessage: 'Offline mode: it\'s impossible to reset password'
  }
}
