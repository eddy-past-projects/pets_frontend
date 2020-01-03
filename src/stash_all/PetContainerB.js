import React from 'react'
import MyPets from '../components/MyPets'
import { getMyPets } from '../actions/myPetsAction'
import { connect } from 'react-redux'



class PetContainer extends React.Component {
  //

  componentDidMount(){
    this.props.getMyPets()
  }
  // console.log(this.props)
  render () {
    console.log(this.props)
  return (<div >
    <MyPets pets={this.props.pets}/>


  </div>)
}
}
const mapStateToProps = state => {
  return {pets: state.pets}
}


export default connect(mapStateToProps, { getMyPets })(PetContainer)
