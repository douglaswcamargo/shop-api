interface MissingFieldErrorMessage {
  status: string
  message: string
}

export const getMissingFieldErrorMessage = (field: string): MissingFieldErrorMessage => ({
  status: 'error',
  message: `Missing required field: ${field}`
})
