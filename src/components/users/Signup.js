import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm, signup} from "../../actions/signupFormAction"
// import {signup} from "../../actions/currentUserAction"
// import {signup} from "../../actions/signupFormAction"

import './Users.css'

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

  return (<form onSubmit={handleSubmit} className='form'>
    < div className='spacer'>
        <h3><input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleOnChange}autoComplete="off"/>
          <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleOnChange}autoComplete="off"/>
          <button type="submit" className="button">Submit</button>
        </h3>
    </div>
  </form>)
}

const mapStateToProps = state => {
  return {signupFormData: state.signupForm}
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)
