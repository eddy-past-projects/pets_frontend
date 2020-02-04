import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/currentUserAction'

const Logout = ({ logout , history}) => {

  const handleSubmit = event => {
    event.preventDefault()
    logout(history)
    history.push('/')
  }

  return (
  <form onSubmit={logout, handleSubmit}>
<div className='log out'>

    <h3><button type="submit" className="button">log out</button></h3>
  </div>
    </form>
  )
}

export default connect(null, {logout})(Logout)
