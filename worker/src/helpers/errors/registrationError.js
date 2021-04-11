export const registrationError = function (status) {
  return {
    status,
    action: 'registration',
    error: true,
    errorType: 'DGtek Partner registration',
    errorMessage: 'Operation failed'
  }
}
