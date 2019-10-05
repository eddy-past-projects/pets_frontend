import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUserAction'

const Logout = ({ logout }) => {

  return (
    <form onSubmit={logout}>
<div className='log out'>
  <input type="submit" value='Log out'/>
</div>
    </form>
  )
}

export default connect(null, {logout})(Logout)
