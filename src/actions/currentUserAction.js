import { resetLogInForm } from './logInFormAction'
// import { resetSignupForm } from './signupFormAction'

// import { getPets } from '../petAction'
// import { clearMyPets } from '../petAction'



// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators



export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    // dispatch(clearMyPets())

    return fetch('https://fast-waters-11750.herokuapp.com/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}




export const getCurrentUser = () => {
  return dispatch => {
    return fetch("https://fast-waters-11750.herokuapp.com/get_current_user", {
      credentials: "include",
      method: "GET",
        headers: {
          'Access-Control-Allow-Origin': 'https://adopt-a-pet.netlify.com/',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp.data))
          // dispatch(getMyPets())

        }
      })
      .catch(console.log)
  }
}
