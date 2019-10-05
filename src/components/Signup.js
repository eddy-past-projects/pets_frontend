import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupFormAction"
import { signup } from "../actions/currentUserAction"


const Signup = ({ signupFormData, updateSignupForm, signup }) => {
  

  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }



  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleOnChange} />
      <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleOnChange} />
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup} )(Signup)
