import React from 'react'
// import { Card, Image, Icon, Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import { Image} from 'semantic-ui-react'





const PetCard = ( {pet} ) => {
  return (

      <div className='pet-card' data-action='this-pet' data-id={pet.id} >
        <Image src={pet.image}  alt='' className='pet-image' />
        <h3>name: {pet.name}</h3>
        <h5>type of pet: {pet.kind}< br/>
        needs to be fed: {String(pet.hungry)}</h5>
      </div>

  )
}
export default PetCard
