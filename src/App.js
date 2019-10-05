import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import PetContainer from './containers/PetContainer'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
//
import MyPets from './components/MyPets'
import NavBar from './components/NavBar'
import {getCurrentUser} from './actions/currentUserAction'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (<div className='App'>
      <NavBar/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/mypets' component={MyPets}/>
      <PetContainer/>



    </div>)

  }
}



export default connect(null, {getCurrentUser})(App);
