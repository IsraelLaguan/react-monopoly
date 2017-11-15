import React, { Component } from 'react'
import Player from '../player/player'

export default class BoardCenter extends Component {
  purchasePrompt() {
    return (
      <div>
        Purchase?
        <button onClick={() => this.props.purchase()}>
          Yes
        </button>
        <button onClick={() => this.props.nextTurn()}>
          No
        </button>
      </div>
    )
  }

  rentedPrompt() {
    return (
      <div>
        You just got rekt. This is owned and you have been charged rent.
        <button onClick={() => this.props.nextTurn()}>
          Ok :()
        </button>
      </div>
    )
  }

  startTurnButton() {
    return <button onClick={() => this.props.startTurn()}>
            Start turn
          </button>
  }

  render() {
    const centerStyle = {
      width: '738px',
      height: '738px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
    return (
      <div style={centerStyle}>
        <Player {...this.props.player}/>
        {this.props.showRentedPrompt || this.props.showPurchasePrompt ? null : this.startTurnButton()}
        {this.props.showRentedPrompt ? this.rentedPrompt() : null}
        {this.props.showPurchasePrompt ? this.purchasePrompt() : null}
      </div>
    )
  }
}
