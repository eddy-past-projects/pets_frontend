const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_PETS":
      return action.pets
      case "CLEAR_MY_PETS":
        return initialState
        case "ADD_PET":
      console.log('add pet reducer')
      return {...state, pets: [...state.pets, action.pet], loading: false}
    default:
      return state
  }
}
