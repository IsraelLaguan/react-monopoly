import React, { Component } from 'react'
import Color from '../../database/colors'
export default class BoardTile extends Component {
  render() {
    const { name, price, id, currentPosition, icon, owner, playerId, ownerIcon } = this.props
    const tempStyle = {
      height: '80px',
      width: '80px',
      border:'1px solid black',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems:'center',
      flexDirection: 'column',
      // backgroundColor: owner === playerId && ~playerId ? '#e0dded' : 'transparent'
    }
    const iconContainer = {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }
    const color = Color[id]
    const colorBar = {
      backgroundColor: color || 'transparent' ,
      width: '80px',
      height: '10px'
    }
    const iconStyle = {
      height: '30px',
      width: '30px'
    }
    const ownerIconStyle = {
      position: 'absolute',
      width: '60px',
      height: '60px',
      opacity: 0.3
    }
    const ownerIconContainerStyle = {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80px',
      height: '80px'
    }
    const iconImgs = this.props.icons.map((icon) => <img src={icon} style={iconStyle}/>)
    return (
      <div style={tempStyle}>
        <div style={ownerIconContainerStyle}>
          {ownerIcon ? <img src={ownerIcon} style={ownerIconStyle}/> : null}
        </div>
        <div style={colorBar}>{" "}</div>
        <div>
          {name}
        </div>
        <div>
          {price ? `($${price})` : null}
        </div>
        <div style={iconContainer}>
          {iconImgs}
        </div>
    </div>
    )
  }
}
