import React from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from '../../actions/currentUserAction'
import PetContainer from '../../containers/PetContainer'
// import UserPets from '../users/UserPets'
//


class Home extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  // componentDidMount(){
  //   this.props.getMyPets()
  // }





  render() {
    console.log('props',this.props, 'props',this.props.currentUser.logged_in, this.props.currentUser.user)
    const currentUser = this.props.currentUser

    let userLog
    if(this.props.currentUser.logged_in === true){
      userLog = `hello ${currentUser.user.name}`
    }else if(this.props.currentUser.notice === 'no one logged in'){
      userLog = 'hello'
    }else if(this.props.currentUser.length === 0){
      userLog = 'hello'
    } else {
      userLog = ` hello ${currentUser.name}`

    }

    // console.log(currentUser.name)
    return(
      <div>
{userLog}

      <PetContainer/>

      </div>
    )

}

}



const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, {getCurrentUser})(Home);
