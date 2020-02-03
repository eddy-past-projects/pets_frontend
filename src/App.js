import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import PetContainer from './containers/PetContainer'
import Login from './components//users/Login'
import Logout from './components/users/Logout'
import Signup from './components/users/Signup'
import MobileNavbar from "./components/mobileNavbar/MobileNavbar"
import Backdrop from "./components/mobileNavbar/Backdrop"
import ToggleButton from "./components/mobileNavbar/ToggleButton"

import NavBar from './components/navbar/NavBar'
import {getCurrentUser} from './actions/currentUserAction'
import Home from './components/home/Home'

import MenuItem from './components/hamburger/MenuItem'
import Menu from './components/hamburger/Menu'
// import Footer from './components/hamburger/Footer'
import MenuButton from './components/hamburger/MenuButton'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
    }
  }

  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }

  handleLinkClick() {
    this.setState({menuOpen: false});
  }

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render(){
    const currentUser = this.props.currentUser

    const styles=
      {
        container:{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: '99',
          opacity: 0.9,
          display:'flex',
          alignItems:'center',
          background: 'black',
          width: '100%',
          color: 'white',
          fontFamily:'Lobster',
        },
        logo: {
          margin: '0 auto',
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          filter: this.state.menuOpen ? 'blur(2px)':null,
          transition: 'filter 0.5s ease',
        },
      }
    const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
    });

    return(
      <div>
        <div style={styles.container}>
          <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
          <div style={styles.logo}>Logo</div>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
        <div style={styles.body}>
        </div>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/logout' component={Logout}/>

        <Home currentUser={this.currentUser}/>
        <PetContainer/>
      </div>
    )
  }
}






const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, {getCurrentUser})(App);
