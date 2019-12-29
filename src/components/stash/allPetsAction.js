// // import { resetPetForm } from './petForm'
//
// // synchronous actions
// export const setAllPets = pets => {
//   return {
//     type: "SET_MY_PETS",
//     pets
//   }
// }
// //
// // export const clearAllPets = () => {
// //   return {
// //     type: "CLEAR_MY_PETS",
// //
// //   }
// // }
//
// //
// export const getAllPets = () => {
//   console.log('dispatch user pets')
//   return dispatch => {
//     return fetch('https://pets-backend-api.herokuapp.com/pets', {
//         credentials: 'include',
//       })
//       .then(resp => resp.json())
// .then(resp => {
//   if (resp.error) {
//     alert(resp.error)
//   } else {
//     dispatch(setAllPets(resp))
//   }
// })
// .catch(console.log)
// }
// }
//
// export const addPet = () => {
//
//   return dispatch => {
//     return fetch("https://pets-backend-api.herokuapp.com/pets", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify()
//     })
//       .then(resp => resp.json())
//       .then(resp => {
//         console.log('addPet', resp)
//         if (resp.error) {
//           alert(resp.error)
//         } else {
//           console.log()
//
//
//         }
//       })
//       .catch(console.log)
//   }
// }
