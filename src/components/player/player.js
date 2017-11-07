import React, { Component} from 'react'

export default class Player extends Component {
  render() {
    console.log(this.props);
    const { cash, icon, currentPosition } = this.props
    const tempStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column'
    }
    return (
      <div style={tempStyle}>
        {cash}
        {icon}
        {currentPosition}
      </div>
    )
  }
}
