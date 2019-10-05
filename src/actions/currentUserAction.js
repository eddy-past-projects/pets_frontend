import { resetLogInForm } from './logInFormAction'
import { resetSignupForm } from './signupFormAction'
import { getMyPets } from './myPetsAction'
import { clearMyPets } from './myPetsAction'



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
    return fetch("http://localhost:3000/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp))
          dispatch(resetLogInForm())
          dispatch(getMyPets())


        }
      })
      .catch(console.log)
  }
}


export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearMyPets())

    return fetch('http://localhost:3000/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp))
          dispatch(getMyPets())

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
    return fetch("http://localhost:3000/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log('signup', resp)
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
