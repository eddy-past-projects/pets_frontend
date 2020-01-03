import React from 'react'
import { connect } from 'react-redux'
import { updateLogInForm } from '../../actions/logInFormAction'
import { login } from '../../actions/currentUserAction'




const Login = ({ loginFormData, updateLogInForm, login, history}) => {

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
    login(loginFormData, history)
    history.push('/')
  }

return (
  <form onSubmit={handleSubmit}>
  <div className="ui form">
    <div className="fields">
      <div className="seven wide field">
        <h3><input placeholder="name" value={loginFormData.name} name="name" type="text" onChange={handleInputChange}/></h3>
      </div>
      <div className="seven wide field">
        <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange}/>
      </div>
      <div className="two wide field">
        <h3><button type="submit" className="ui button">Submit</button></h3>
      </div>
    </div>
  </div>
</form>
)
}






const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLogInForm, login } )(Login)
