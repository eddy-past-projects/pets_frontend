import { setCurrentUser } from './currentUserAction'



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
export const login = (credentials) => {
  return dispatch => {
    return fetch("https://safe-waters-79087.herokuapp.com/https://fast-waters-11750.herokuapp.com/login", {
      credentials: "include",
      method: "POST",
        headers: {
           "Access-Control-Allow-Headers": "x-requested-with, x-requested-by",
          'Access-Control-Allow-Origin': 'https://fast-waters-11750.herokuapp.com',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      .then(resp => resp.json())
      .then(resp => {
        console.log('login', resp)
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp))
          dispatch(resetLogInForm())
          // dispatch(getMyPets())


        }
      })
      .catch(console.log)
  }
}
