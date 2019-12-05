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
    <Card >
      <Image src={pet.image}  alt='' className='pet-image' />
      { (this.state.front) ?
      (<>

        </>) :
        <Card.Content >
        </Card.Content >
      }

    </Card >

)

}
}
export default PetCard
