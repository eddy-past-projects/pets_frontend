import React from 'react'
import {connect} from 'react-redux'
import { addPet } from '../actions/myPetsAction'

class Petform extends React.Component { //

  state = {
    name: '',
    kind: "",
    color: '',
    hair: "",
    image: '',
    age: 0,
    hungry: true,
    sitter: false
  }


  handleOnChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}


  render() {
    return (<div>
      <h1>Adopt a pet!</h1>
      <form>
        <input onChange={this.handleOnChange} value={this.state.name} type="text" name="name" placeholder="name" autoComplete="off"/><br/>
        <input onChange={this.handleOnChange} value={this.state.kind} type="text" name="kind" placeholder="kind" autoComplete="off"/><br/>
        <input onChange={this.handleOnChange} value={this.state.color} type="text" name="color" placeholder="color" autoComplete="off"/><br/>
        <input onChange={this.handleOnChange} value={this.state.hair} type="text" name="hair" placeholder="hair" autoComplete="off"/><br/>
        <input onChange={this.handleOnChange} value={this.state.image} type="text" name="image" placeholder="image" autoComplete="off"/><br/>
        <input onChange={this.handleOnChange} value={this.state.age} type="integer" name="age" placeholder="age" autoComplete="off"/><br/>
      </form>
    </div>)

  }

}
export default connect({ addPet })(Petform)
