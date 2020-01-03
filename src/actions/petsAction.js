// import { resetPetForm } from './petForm'

// synchronous actions
// export const setMyPets = pets => {
//   return {
//     type: "SET_MY_PETS",
//     pets
//   }
// }
//
// export const clearMyPets = () => {
//   return {
//     type: "CLEAR_MY_PETS",
//
//   }
// }

//
export const getPets = () => {
  console.log('dispatch user pets')
  return dispatch => {
    dispatch({type: 'LOADING_PETS'})
    return fetch('https://safe-waters-79087.herokuapp.com/https://fast-waters-11750.herokuapp.com/pets.json')
    // return fetch('http://localhost:3000/pets')

    .then(resp => resp.json())
  // .then(console.log)
  .then(pets => {
    console.log('pets', pets)
    dispatch({ type: 'FETCH_PETS', payload: pets })});
}
}
// // //
