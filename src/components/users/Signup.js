import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from "../../actions/signupFormAction"
import {signup} from "../../actions/currentUserAction"

const Signup = ({signupFormData, updateSignupForm, signup, history}) => {

  const handleOnChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
    history.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className='ui form'>
      <div className="fields">
        <div className="seven wide field">
          <h3><input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleOnChange}/></h3>
        </div>
        <div className="seven wide field">
          <h3><input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleOnChange}/></h3>
        </div>
        <div className="two wide field">
          <h3>
            <button type="submit" className="ui button">Submit</button>
          </h3>
        </div>
      </div>
    </div>
  </form>
)
}

const mapStateToProps = state => {
  return {signupFormData: state.signupForm}
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)
