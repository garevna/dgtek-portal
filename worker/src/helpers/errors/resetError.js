export const resetError = function (status) {
  return {
    status,
    action: 'reset',
    error: true,
    errorType: 'Reset password',
    errorMessage: 'Operation failed'
  }
}
