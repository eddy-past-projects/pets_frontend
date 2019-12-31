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
    return fetch('http://localhost:3000/pets')

      .then(resp => resp.json())
  //     .then(res => res.text())          // convert to plain text
  // .then(text => console.log(text))
.then(resp => {
  if (resp.error) {
    alert(resp.error)
  } else {
    dispatch(setMyPets(resp))
  }
})
.catch(console.log)
}
}
// //
