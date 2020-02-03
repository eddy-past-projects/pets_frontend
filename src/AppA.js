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

  render(){
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
          <Footer name='Menu'/>
        </div>
      </div>
    )
  }
}


class App extends React.Component {
  state = {
    mobileNavbarOpen: false,
    toggleButtonOpen: false,
  };

  toggleButtonClickHandler = () => {
    this.setState((prevState) => {
      return {
        mobileNavbarOpen: !prevState.mobileNavbarOpen,
        toggleButtonOpen: !prevState.toggleButtonOpen,

      }
    })
  }

  toggleBackClickHandler = () => {
    this.setState({mobileNavbarOpen: false, toggleButtonOpen: false})
  }

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    console.log(this.props, this.state)
    const currentUser = this.props.currentUser
    console.log(currentUser.name)

    let backdrop;

    if (this.state.mobileNavbarOpen) {
      backdrop = <Backdrop click={this.toggleBackClickHandler}/>;
    }

    return (<div className='App'>
      <div style={{
          height: '100%'
        }}/>

      <NavBar buttonClickHandler={this.toggleButtonClickHandler}/>
      <MobileNavbar show={this.state.mobileNavbarOpen}/> {backdrop}
        <ToggleButton show={this.state.toggleButtonOpen}/>

      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/logout' component={Logout}/>

      <Home currentUser={this.currentUser}/>
      <PetContainer/>
    </div>)


     }




}
const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, {getCurrentUser})(App);
