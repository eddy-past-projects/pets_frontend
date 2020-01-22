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
  console.log('dispatch user pets')
  return dispatch => {
    dispatch({type: 'LOADING_PETS'})
    return fetch('https://cors-anywhere.herokuapp.com/https://upbeat-wing-9cf687.netlify.com/pets.json')
    // return fetch('http://localhost:3000/pets')

    .then(resp => resp.json())
  // .then(console.log)
  .then(pets => {
    console.log('pets', pets)
    dispatch({ type: 'FETCH_PETS', payload: pets })});
}
}