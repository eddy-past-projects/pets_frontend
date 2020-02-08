// import { resetPetForm } from './petForm'

// synchronous actions

// export const setPets = pets => {
//   return {
//     type: "SET_PETS",
//     pets
//   }
// }
//

// export const clearPets = () => {
//   return {
//     type: "CLEAR_PETS",
//
//   }
// }

//
export const getPets = () => {
  // console.log('dispatch user pets')
  return dispatch => {
    dispatch({type: 'LOADING_PETS'})
    return fetch('https://safe-waters-79087.herokuapp.com/https://fast-waters-11750.herokuapp.com/pets')

    .then(resp => resp.json())
  // .then(console.log)
  .then(pets => {
    // console.log('pets', pets)
    dispatch({ type: 'FETCH_PETS', payload: pets })});
}
}
