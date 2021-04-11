export const codeError = function (status) {
  return {
    status,
    action: 'reset',
    error: true,
    errorType: 'Verification',
    errorMessage: 'Invalid code'
  }
}
