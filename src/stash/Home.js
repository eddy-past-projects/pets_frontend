import React from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from '../../actions/currentUserAction'
// import {loginStatus} from '../../acti/ons/logInStatusAction'

import PetContainer from '../../containers/PetContainer'




class Home extends React.Component {
  state = {
    isLoggedIn: false,
    user: {}
  }

  componentDidMount() {
    this.props.getCurrentUser()
    this.loginStatus()
  }
  // componentDidMount(){
  //   this.props.getMyPets()
  // }
  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}


loginStatus = (credentials) => {
  console.log('loginstatus', credentials)
  return fetch("http://localhost:3000/logged_in", {
    credentials: "include",
    method: "GET",
    headers: {
      // 'Access-Control-Allow-Origin': 'https://adopt-a-pet.netlify.com',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(resp => resp.json())
  // .then('logged in',console.log)
  .then(resp => {
    if (resp.logged_in) {
      this.handleLogin(resp)
    } else {
      this.handleLogout()
    }
  }).catch(error => console.log('api errors:', error))
}

handleLogin = (resp) => {
  this.setState({isLoggedIn: true, user: resp.user})
}
handleLogout = () => {
  this.setState({isLoggedIn: false, user: {}})
}

  render() {
    console.log('props',this.props, 'state',this.state)
    const currentUser = this.props.currentUser
    const currentUserName = this.props.currentUser.name

    const userLoggedin = this.props.currentUser.logged_in
    const userLogin = this.state.isLoggedIn
    const userLogsin = this.state.isLoggedIn.user

    console.log(userLoggedin, userLogin, userLogsin,currentUserName)

    // let user
    // if (userLogin) {
    //   return  `hello ${userLoggedin}`
    // } else {
    //   return  `hello ${currentUser.name}`
    // }
    // {userLoggedin ? currentUserName : null}
// let userLog
//     if (userLogin) {
//     userLog = `hello ${currentUser.name}`
//   } else {
//     userLog = `hello`
//
//   }




    return(
      <div>



        hello {currentUser.name}

      <PetContainer/>
      </div>
    )

}
}





const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, {getCurrentUser})(Home);
