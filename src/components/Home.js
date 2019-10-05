import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'



const Home = () => {

  return (
    <div>
      <span>
     welcome, please<Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
   </span>

    </div>

  )

}

export default Home
