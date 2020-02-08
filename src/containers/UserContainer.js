import React from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from '../../actions/currentUserAction'
import UserPets from '../users/UserPets'



class UserContainer extends React.Component {
  //

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    console.log(this.props, this.state)
    const currentUser = this.props.currentUser
    console.log(currentUser.name)

    return(
      <div>
    
      <UserPets petsUser={this.props.currentUser}/>
      </div>
    )

  }

  }



  const mapStateToProps = state => {
  return {currentUser: state.currentUser}
  }




export default connect(mapStateToProps, {getCurrentUser})(UserContainer)
