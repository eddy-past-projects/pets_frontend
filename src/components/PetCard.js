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
// hungryToggle =({ item, mode })=> {
//   const isHungryMode = mode === 'hungry';
//   return (
//     <div>
//       { isHungryMode
//         ? <itemHungry item={item} />
//         : <ItemView item={item} />
//       }
//     </div>
//   );
// }

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
          <h3>hi! i'm {pet.name}</h3>
            <h5>i'm {pet.age} years old.</h5>
          <hr></hr>


          </Card.Description>
          <Button size='mini' onClick={this.toggleCard}>flip to tend to me!</Button>
          </Card.Content>


        </>) :
        <Card.Content >
            <h5>needs to be fed: {String(pet.hungry)}</h5>
              <Button size='mini' onClick={this.toggleCard}>flip back!</Button>

        </Card.Content >
      }

    </Card >

)

}
}
export default PetCard
