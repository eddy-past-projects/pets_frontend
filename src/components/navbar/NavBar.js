import React from 'react'
import { connect } from 'react-redux'
import Login from '../../components/Login'
import Logout from '../../components/Logout'
import { Link } from 'react-router-dom'
import './NavBar.css'
import ToggleButton from '../mobileNavbar/ToggleButton'



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
   let wordsNavbar
    const width = this.state.width
    // width <= 500 ? isMobile = true : isMobile = false
    width <= 700
      ? wordsNavbar = "navbar-mobile"
      : wordsNavbar = "navbar-desktop"



  return (<div>
    <nav id="navbar">
      <div className={wordsNavbar}>
        <ToggleButton/>
  <Link to="/"  className='navbar-brand'><span>Adopt a Pet!</span></Link>
  <div className='words'>
  <ul>
    <li><Link to="/" className='nav-home'>Home</Link></li>
    <li><Link to="/login" className='nav-log-in' >Log In</Link></li>
    <li><Link to="/signup" className='nav-sign-up' >Sign Up</Link></li>
    <li><Link to="/logout" className='nav-log-out' >Log Out</Link></li>
  </ul>
  <button className="navbar-toggler">
    <span></span>
  </button>
</div>
</div>
</nav>






  </div>);
}
}

const mapStateToProps = ({ currentUser }) => {
  return { currentUser }
}

export default connect(mapStateToProps)(NavBar);
