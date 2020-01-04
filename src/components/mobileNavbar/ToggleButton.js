import React from 'react'
import './ToggleButton.css'
import './MobileNavbar'

const ToggleButton = props => (

  // let toggleClasses = ['toggle-button']
  // if(props.show) {
  //   toggleClasses = ['toggle-button close']
  // }

  <button className='toggle' onClick={props.click}>
    <div className='toggle-button_line'/>
    <div className='toggle-button_line'/>
    <div className='toggle-button_line'/>
</button>)

// return (
//   <div />
//
// )



export default ToggleButton
