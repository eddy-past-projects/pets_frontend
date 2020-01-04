import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
// import { Container } from 'semantic-ui-react'
import PetContainer from './containers/PetContainer'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import {logout} from './actions/currentUserAction'
import MobileNavbar from "./components/mobileNavbar/MobileNavbar"
import Backdrop from "./components/mobileNavbar/Backdrop"

//
import Pets from './components/pets/Pets'
import NavBar from './components/navbar/NavBar'
import {getCurrentUser} from './actions/currentUserAction'

class App extends React.Component {
  state = {
    mobileNavbarOpen: false
  };

  toggleButtonClickHandler = () => {
    this.setState((prevState) => {
      return {
        mobileNavbarOpen: !prevState.mobileNavbarOpen
      }
    })
  }

  toggleBackClickHandler = () => {
    this.setState({mobileNavbarOpen: false})
  }

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    console.log(this.props, this.state)
    let backdrop;

    if (this.state.mobileNavbarOpen) {
      backdrop = <Backdrop click={this.toggleBackClickHandler}/>
    }

    return (<div className='App'>
      <div style={{
          height: '100%'
        }}/>

      <NavBar buttonClickHandler={this.toggleButtonClickHandler}/>
      <MobileNavbar show={this.state.mobileNavbarOpen}/> {backdrop}
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/logout' component={Logout}/>
      <Route path='/mypets' component={Pets}/>
      <PetContainer/>

    </div>)

  }
}

export default connect(null, {getCurrentUser})(App);
