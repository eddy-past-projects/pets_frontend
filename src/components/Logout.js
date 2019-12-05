import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUserAction'

const Logout = ({ logout }) => {

  return (
    <form onSubmit={logout}>
<div className='log out'>
  <div className="two wide field">
    <h3><button type="submit" className="ui button">log out</button></h3>
  </div>
</div>
    </form>
  )
}

export default connect(null, {logout})(Logout)
