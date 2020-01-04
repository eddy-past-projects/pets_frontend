import React from 'react'
import Petform from './components/Petform'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUserAction'




class UserShow extends React.Component {


  render(
    console.log(this.props)
  ) {
    return(
      <div>
      <Petform/>
      <li><Link to="/" className='nav-home'>Home</Link></li>
      </div>
    )
  }



}


export default connect(null, {getCurrentUser})(UserShow);


//should be able to return to home without signing out
//should be able to adopt pet here
//if you don't have a pet, it won't show anything but
//welcome, name, would you like to adopt a pet?
