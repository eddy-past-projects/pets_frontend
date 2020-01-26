import React from 'react'
import {connect} from 'react-redux'
import {updateLogInForm, login} from '../../actions/logInFormAction'
// import {login} from '../../actions/currentUserAction'
import './Users.css'

const Login = ({loginFormData, updateLogInForm, login, history}) => {
console.log('in login form')
  const handleInputChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLogInForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
    history.push('/')
  }

  return (<form onSubmit={handleSubmit}>
    < div className='spacer'>
      <h3><input placeholder="name" value={loginFormData.name} name="name" type="text" onChange={handleInputChange}autoComplete="off" />
        <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange}autoComplete="off"/>
        <button type="submit" className="button">Submit</button>
      </h3>
    </div>
  </form>)
}

const mapStateToProps = state => {
  return {loginFormData: state.loginForm}
}

export default connect(mapStateToProps, {updateLogInForm, login})(Login)
