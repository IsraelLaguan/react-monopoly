import React, { Component } from 'react'

export default class BoardTile extends Component {
  render() {
    const { name, price, id, currentPosition, icon, owner } = this.props
    const tempStyle = {
      height: '100px',
      width: '100px',
      border:'2px solid black',
      margin: '7px',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column'
    }
    return (
      <div style={tempStyle}>
        <div>
          {name}
        </div>
        <div>
          {price}
        </div>
        {(typeof owner === 'number') ? owner : null}
        {currentPosition === id ? icon : null}
      </div>
    )
  }
}
