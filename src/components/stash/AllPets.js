// import React from 'react'
// import { connect } from 'react-redux'
// // import { Link } from 'react-router-dom'
// import PetCard from './PetCard'
//
// const AllPets = props => {
//   const petCards = props.pets.length > 0 ? props.pets.map(pet => <PetCard img scr={pet.image} pet={pet} key={pet.id}/>) : []
//   return (
//     petCards
//   )
// }
//
// // we provide mapStateToProps to Redux in order to tell Redux:
// // "Excuse me Redux, would you please provide use access to your state
// // so that we may pick and choose the pieces of state we would like availble
// // to this particular component as props."
//
// const mapStateToProps = state => {
//   return {
//     pets: state.AllPets,
//   }
// }
//
// export default connect(mapStateToProps)(AllPets)
