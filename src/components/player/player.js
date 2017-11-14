import React, { Component} from 'react'

export default class Player extends Component {
  render() {
    const { cash, icon, currentPosition } = this.props
    const tempStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column',
      fontSize: '40px'
    }
    const imageStyle = {
      width: '80px',
      height: '80px'
    }
    return (
      <div style={tempStyle}>
        cash: ${cash}
        <img style={imageStyle} src={icon}/>
        currPos: {currentPosition}
      </div>
    )
  }
}
