
export default (state = {loading: false, pets: []}, action) => {

  switch(action.type) {

    case 'LOADING_PETS':
      return {...state, loading: true}

    case "FETCH_PETS":
    // console.log('fetch pets',action.payload )
      return {...state, loading: false, pets: action.payload}
    // case "SET_MY_PETS":
    //   return action.pets
    //   case "CLEAR_MY_PETS":
    //     return initialState
    default:
      return state
  }
}
