import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'


const PetCard = ( {pet} ) => {
  return (

      <div className='pet-card' data-action='this-pet' data-id={pet.id} >
        <Image scr={pet.image} className='pet-image' />
        <p>name: {pet.name}</p>
        <p>type of pet: {pet.kind}</p>
      </div>

  )
}
export default PetCard
