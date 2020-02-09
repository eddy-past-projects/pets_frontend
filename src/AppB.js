import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './components//users/Login'
import Logout from './components/users/Logout'
import Signup from './components/users/Signup'
import MobileNavbar from "./components/mobileNavbar/MobileNavbar"
import Backdrop from "./components/mobileNavbar/Backdrop"
import ToggleButton from "./components/mobileNavbar/ToggleButton"

import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'

class App extends React.Component {
  state = {
    mobileNavbarOpen: false,
    toggleButtonOpen: false,
    isLoggedIn: false,
}


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


  render() {
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

      <Home />

    </div>)
     }
}


export default App;
