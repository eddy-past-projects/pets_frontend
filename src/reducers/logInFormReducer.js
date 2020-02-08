// const initialState = {
//   name: '',
//   password: ''
// }
//
// export default (state = initialState, action) => {
//   switch(action.type) {
//     case "UPDATE_LOGIN_FORM":
//     return action.formData
//     case "RESET_LOGIN_FORM":
//     return initialState;
//     case "UPDATE_LOGIN_STATUS":
//     return action.formData;
//     default:
//     return state
//   }
// }
const initialState = {
  name: '',
  password: '',
  loading: false
}

export default (state = initialState, action) => {
  // export default (state = {loading: false, name: '', password: ''}, action) => {


  switch(action.type) {
    case "UPDATE_LOGIN_FORM":
    return action.formData
    case "RESET_LOGIN_FORM":
    return initialState
    case "UPDATE_LOGIN_STATUS":
    return {...state, loading: true}
    default:
    return state
  }
}
