import React from 'react'

const PetCard = ( {pet} ) => {
  return (
    <div className='pet-card' data-action='this-pet' data-id={pet.id} >
      <div className='pet-image' img={pet.image} />

      <h3>name: {pet.name}</h3>
      <p>type of pet: {pet.kind}</p>
    </div>
  )
}
export default PetCard
