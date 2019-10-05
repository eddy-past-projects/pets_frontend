import React from 'react'
import { connect } from 'react-redux'
import { updateLogInForm } from '../actions/logInFormAction'
import { login } from '../actions/currentUserAction'




const Login = ({ loginFormData, updateLogInForm, login}) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLogInForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name" value={loginFormData.name} name="name" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
      <input type="submit" value="Log In"/>
    </form>
  )
}


const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLogInForm, login } )(Login)
