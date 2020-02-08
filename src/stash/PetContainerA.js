

import React from 'react'
import Pets from '../components/pets/Pets'
import UserPets from '../components/users/UserPets'

import { getPets } from '../actions/petsAction'
import { connect } from 'react-redux'



class PetContainer extends React.Component {
  //

  componentDidMount(){
    this.props.getPets()
  }

  filterPets = (userId) => {
  return this.props.pets.pets.filter(pet => {
    return pet.user_id === userId
  })
}
  // console.log(this.props)
  render () {

    // console.log('props',this.props, 'props.pets.pets',this.props.pets.pets, 'user pets', this.props.userId)
    const userId = this.props.userId
    console.log(userId)

  return (<div >

    <Pets pets={this.props.pets.pets}/>
      <UserPets pets={this.filterPets(userId)} />



  </div>)
}
}
const mapStateToProps = state => {
  return {pets: state.pets}
}


export default connect(mapStateToProps, { getPets })(PetContainer)
