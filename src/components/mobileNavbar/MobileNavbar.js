import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNavbar.css'


const MobileNavbar = props => {

  let mobileClasses = ['mobile-navbar']
  if(props.show) {
    mobileClasses = ['mobile-navbar open']
    console.log('hi')
  }


return (
  <nav className={mobileClasses}>
  <ul>
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/login" >Log In</Link></li>
    <li><Link to="/signup" >Sign Up</Link></li>
    <li><Link to="/logout"  >Log Out</Link></li>
  </ul>

  </nav>
)

}

export default MobileNavbar
