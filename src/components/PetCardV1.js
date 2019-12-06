import React from 'react'
// import { Card, Image, Icon, Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
// import { Image} from 'semantic-ui-react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'






class PetCard extends React.Component {

  state ={
  front:true
}

toggleCard = ()=>{
  this.setState((prevState) =>{
    return {front:!prevState.front}
  })
}

render() {
  // console.log('trip', this.props)
  const { pet } = this.props

  return(
    <Card className='pet-card' data-action='this-pet' data-id={pet.id} >
      <Image src={pet.image}  alt='' className='pet-image' />
      { (this.state.front) ?
      (<>
        <Card.Content >
          <Card.Description>
            <h3>name: {pet.name}</h3>
            <h5>type of pet: {pet.kind}< br/>
            needs to be fed: {String(pet.hungry)}</h5>
          <hr></hr>


          </Card.Description>
          <Button size='mini' onClick={this.toggleCard}>flip to tend to your pet!</Button>
          </Card.Content>


        </>) :
        <Card.Content >
        </Card.Content >
      }

    </Card >

)

}
}
export default PetCard
