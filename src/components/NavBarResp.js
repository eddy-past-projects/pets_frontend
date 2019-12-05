import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'
import { Link } from 'react-router-dom'



class NavBar extends React.Component {

  constructor(props) {
   super()

  this.state = {
     width: window.innerWidth
   }
 }

 componentDidMount() {
   window.addEventListener('resize', this.handleWindowSizeChange);
 }

 componentWillUnmount() {
   window.removeEventListener('resize', this.handleWindowSizeChange);
 }

 handleWindowSizeChange = () => {
   this.setState({ width: window.innerWidth });
 }

 render (){
   let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false


    let buttonSize
    let navbarStyle
    if (isMobile) {
      buttonSize = "small"
      navbarStyle = "NavBar mobile"
    } else {
      buttonSize = "large"
      navbarStyle = "NavBar desktop"
    }



  return (<div>
    <nav id="navbar">
  <Link to="/"  className='navbar-brand'><span>Adopt a Pet!</span></Link>
  <ul>
    <li><Link to="/" className='nav-home'>Home</Link></li>
    <li><Link to="/login" className='nav-log-in' >Log In</Link></li>
    <li><Link to="/signup" className='nav-sign-up' >Sign Up</Link></li>
    <li><Link to="/logout" className='nav-log-out' >Log Out</Link></li>
  </ul>
  <button className="navbar-toggler">
    <span></span>
  </button>
</nav>






  </div>);
}
}

const mapStateToProps = ({ currentUser }) => {
  return { currentUser }
}

export default connect(mapStateToProps)(NavBar);
