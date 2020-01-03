// import { resetPetForm } from './petForm'

// synchronous actions
export const setMyPets = pets => {
  return {
    type: "SET_MY_PETS",
    pets
  }
}

export const clearMyPets = () => {
  return {
    type: "CLEAR_MY_PETS",

  }
}

//
export const getMyPets = () => {
  console.log('dispatch user pets')
  return dispatch => {
    dispatch({type: 'LOADING_PETS'})
    return fetch('http://localhost:3000/pets')
    // return fetch('http://localhost:3000/pets')

    .then(resp => resp.json())
  // .then(console.log)
  .then(pets => {
    console.log('pets' )
    dispatch({ type: 'FETCH_PETS', payload: pets })});
}
}
// // //
