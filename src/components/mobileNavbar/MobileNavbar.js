import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNavbar.css'


const MobileNavbar = props => (

  <nav className='mobile-navbar' onClick={props.click}>
  <ul>
    <li><Link to="/" className='nav-home'>Home</Link></li>
    <li><Link to="/login" className='nav-log-in' >Log In</Link></li>
    <li><Link to="/signup" className='nav-sign-up' >Sign Up</Link></li>
    <li><Link to="/logout" className='nav-log-out' >Log Out</Link></li>
  </ul>

  </nav>

)

export default MobileNavbar
