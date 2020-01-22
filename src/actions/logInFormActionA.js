export const updateLogInForm = (formData) => {
  return {
    type: 'UPDATE_LOGIN_FORM',
    formData
  }
}

export const resetLogInForm = () => {
  return {
    type: 'RESET_LOGIN_FORM',

  }
}
