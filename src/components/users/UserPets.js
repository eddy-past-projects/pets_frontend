import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserPetCard from './UserPetCard'
import '../pets/Pets.css'
import { getCurrentUser } from '../../actions/currentUserAction'



const UserPets = props => {
  const allpets = props.pets.pets
  const petsUser = props.petsUser.pets
  // console.log('allpets',allpets, 'props',props, 'props.petUser',props.petsUser, props.petsUser.pets)
  const userPetCards = petsUser.length > 0 ? petsUser.map(pet => <UserPetCard img scr={pet.image} pet={pet} key={pet.id}/>)
  : []

console.log(petsUser.length )
  return (

      userPetCards


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

export default connect(mapStateToProps, {getCurrentUser})(UserPets)

// <>please <Link to="/" class>click here </Link>to adopt a furry friend of your own</>
