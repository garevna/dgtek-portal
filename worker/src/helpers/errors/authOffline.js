export const authOffline = function () {
  return {
    status: 0,
    action: 'auth',
    error: true,
    errorType: 'DGtek Partner authorization',
    errorMessage: 'Offline mode: authorization is impossible'
  }
}
