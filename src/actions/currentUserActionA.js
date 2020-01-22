import { resetLogInForm } from './logInFormAction'
import { resetSignupForm } from './signupFormAction'

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
export const login = (credentials) => {
  return dispatch => {
    return fetch("https://cors-anywhere.herokuapp.com/https://fast-waters-11750.herokuapp.com/login", {
      credentials: "include",
      // credentials: 'same-origin',
      // credentials: 'omit',
      method: "POST",
        headers: {
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


export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    // dispatch(clearMyPets())

    return fetch('https://cors-anywhere.herokuapp.com/https://fast-waters-11750.herokuapp.com/logout', {
      // credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("https://cors-anywhere.herokuapp.com/https://fast-waters-11750.herokuapp.com/get_current_user", {
      method: "GET",
        headers: {
          'Access-Control-Allow-Origin': 'https://fast-waters-11750.herokuapp.com',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp))
          // dispatch(getMyPets())

        }
      })
      .catch(console.log)
  }
}

export const signup = (credentials) => {
  console.log('signup', credentials)
  const userInfo = {
    user: credentials
  }

  return dispatch => {
    return fetch("https://cors-anywhere.herokuapp.com/https://fast-waters-11750.herokuapp.com/signup", {

      credentials: "include",
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': 'https://fast-waters-11750.herokuapp.com',
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
