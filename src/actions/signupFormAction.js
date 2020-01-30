// synchronous action creators
import { setCurrentUser } from './currentUserAction'

export const updateSignupForm = formData => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData
  }
}

export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM"
  }
}
export const signup = (credentials, history) => {
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      return fetch("http://localhost:3000/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          // 'Access-Control-Allow-Headers':"x-requested-with, x-requested-by",

        
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
        .then(resp => resp.json())
        .then(resp => {
          console.log('signup resp', resp)
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(setCurrentUser(resp))
            dispatch(resetSignupForm())


          }
        })
        .catch(console.log)
    }
  }
