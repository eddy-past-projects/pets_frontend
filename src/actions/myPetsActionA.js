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
    return fetch('http://localhost:3000/pets', {
        credentials: 'include',
      })
      .then(resp => resp.json())
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
export const addPet = () => {

  return dispatch => {
    return fetch("http://localhost:3000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log('addPet', resp)
        if (resp.error) {
          alert(resp.error)
        } else {
          console.log()


        }
      })
      .catch(console.log)
  }
}
