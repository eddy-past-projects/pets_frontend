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
// export const updateLogInStatus = (formData) => {
//   console.log('in updateLoginstatus', formData)
//   return {
//     type: "UPDATE_LOGIN_STATUS",
//     formData
//
//   }
// }

// axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
//     .then(resp => {
//       if (response.data.logged_in) {
//         this.props.handleLogin(response.data)
//         this.redirect()
//       } else {
//         this.setState({
//           errors: response.data.errors
//         })
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   };
// redirect = () => {
//     this.props.history.push('/')
//   }
// handl

// export const loginStatus = (credentials) => {
//   console.log('loginstatus', credentials)
//   return fetch("http://localhost:3000/logged_in", {
//     credentials: "include",
//     method: "GET",
//     headers: {
//       // 'Access-Control-Allow-Origin': 'https://adopt-a-pet.netlify.com',
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   }).then(resp => resp.json())
//   .then('logged in',console.log)
// //   .then(resp => {
// //     if (resp.data.logged_in) {
// //       this.handleLogin(resp)
// //     } else {
// //       this.handleLogout()
// //     }
// //   }).catch(error => console.log('api errors:', error))
// }



export const login = (credentials) => {
  console.log('loginForm',credentials)
  return dispatch => {
    return fetch("http://localhost:3000/login", {
      credentials: "include",
      method: "POST",
      headers: {
          // 'Access-Control-Allow-Origin': 'https://adopt-a-pet.netlify.com',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
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
          localStorage.setItem('userLoggedIn', true);
          // dispatch(getMyPets())


        }
      })
      .catch(console.log)
  }
}
