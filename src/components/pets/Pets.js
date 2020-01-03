import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import PetCard from './PetCard'
import './Pets.css'


const Pets = props => {
  const allpets = props.pets.pets
  console.log('allpets',allpets)
  const petCards = allpets.length > 0 ? allpets.map(pet => <PetCard img scr={pet.image} pet={pet} key={pet.id}/>) : []
console.log(petCards)
  return (
    petCards

  )
}

// we provide mapStateToProps to Redux in order to tell Redux:
// "Excuse me Redux, would you please provide use access to your state
// so that we may pick and choose the pieces of state we would like availble
// to this particular component as props."

const mapStateToProps = state => {
  return {
    pets: state.pets
  }
}

export default connect(mapStateToProps)(Pets)
