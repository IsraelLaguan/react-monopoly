import React, { Component } from 'react'
import Player from '../player/player'

export default class BoardCenter extends Component {
  prompt() {
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
        {this.props.showPrompt ? this.prompt() : this.startTurnButton()}
      </div>
    )
  }
}
