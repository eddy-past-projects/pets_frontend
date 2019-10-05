import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'


const NavBar = ({ currentUser }) => {

  return (<div>
    {  currentUser ? <p>welcome {currentUser.name}</p> : "" }
    <button>log in</button>or
      <button>sign up</button>



  </div>);
}

const mapStateToProps = ({ currentUser }) => {
  return { currentUser }
}

export default connect(mapStateToProps)(NavBar);
