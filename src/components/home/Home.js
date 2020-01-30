import React from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from '../../actions/currentUserAction'



class Home extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  // componentDidMount(){
  //   this.props.getMyPets()
  // }





  render() {
    console.log(this.props, this.state)
    const currentUser = this.props.currentUser
    console.log(currentUser.name)
    return(
      <div>


      hello {currentUser.name}
      </div>
    )

}

}



const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, {getCurrentUser})(Home);
