import React from 'react'
import Pets from '../components/pets/Pets'
import { getPets } from '../actions/petsAction'
import { connect } from 'react-redux'



class PetContainer extends React.Component {
  //

  componentDidMount(){
    this.props.getPets()
  }
  // console.log(this.props)
  render () {
    console.log(this.props, this.props.pets.pets)
  return (<div >

    <Pets pets={this.props.pets.pets}/>


  </div>)
}
}
const mapStateToProps = state => {
  return {pets: state.pets}
}


export default connect(mapStateToProps, { getPets })(PetContainer)
