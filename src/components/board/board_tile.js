import React, { Component } from 'react'

export default class BoardTile extends Component {
  render() {
    const { name, price, id, currentPosition, icon } = this.props
    const tempStyle = {
      height: '100px',
      width: '100px',
      border:'2px solid black',
      margin: '20px',
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
        {currentPosition === id ? icon : null}
      </div>
    )
  }
}
