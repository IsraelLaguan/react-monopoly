import React, { Component} from 'react'

export default class Player extends Component {
  render() {
    console.log(this.props);
    const { cash, icon, currentPosition } = this.props
    const tempStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column',
      fontSize: '40px'
    }
    return (
      <div style={tempStyle}>
        cash: ${cash}
        <img src={icon}/>
        currPos: {currentPosition}
      </div>
    )
  }
}
