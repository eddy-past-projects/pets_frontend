import React from 'react';
import './App.css';
import { Route} from 'react-router-dom'
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
    user: {}
  };

  toggleButtonClickHandler = () => {
    this.setState((prevState) => {
      return {
        mobileNavbarOpen: !prevState.mobileNavbarOpen,
        toggleButtonOpen: !prevState.toggleButtonOpen
      }
    })
  }

  toggleBackClickHandler = () => {
    this.setState({mobileNavbarOpen: false, toggleButtonOpen: false})
  }

  componentDidMount() {
    this.loginStatus()
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }



  loginStatus = (credentials) => {
    fetch("http://localhost:3000/logged_in", {
      credentials: "include",
      method: "GET",
      headers: {
        // 'Access-Control-Allow-Origin': 'https://adopt-a-pet.netlify.com',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(resp => resp.json())
    .then(resp => {
      if (resp.logged_in) {
        this.handleLogin(resp)
      } else {
        this.handleLogout()
      }
    }).catch(error => console.log('api errors:', error))
  }

  handleLogin = (resp) => {
    this.setState({isLoggedIn: true, user: resp.user})
  }
  handleLogout = () => {
    this.setState({isLoggedIn: false, user: {}})
  }

  render() {
  
    console.log(this.props)
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

      <Route path='/logout' component={Logout}/>
      <Route exact="exact" path='/login' render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
      <Route exact="exact" path='/signup' render={props => (<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>

      <Home loggedInStatus={this.state.isLoggedIn}/>
    </div>)
  }

}

export default App;
