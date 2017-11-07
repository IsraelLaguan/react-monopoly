import React, { Component } from 'react'
import Game from '../../game/game'
import BoardTile from './board_tile'
import { connect } from 'react-redux'
import Player from '../player/player'
import Turn from '../../game/turn'
import { receivePlayer } from '../../actions/player_actions'

class BoardPresentational extends Component {
  constructor() {
    super()
    this.state = {
      player: {}
    }
  }

  componentWillMount() {
    console.log(Object.values(this.props.player)[0]);
    const player = Object.values(this.props.player)[0]
    this.setState({player})
  }

  startTurn() {
    let {player, property} = this.props
    const currPlayer = Object.values(this.props.player)[0]
    const currentPlayerId = 0
    this.turn = new Turn({player:currPlayer, property})
    this.turn.startTurn()
    const exportedData = this.turn.exportData()
    const playerData = exportedData.player
    const propertyData = exportedData.property
    const playerDispatchData = {[currentPlayerId]:{...playerData}}
    this.props.receivePlayer(playerDispatchData)
  }

  propertiesRender() {
    const properties = Object.values(this.props.property)
    const player = Object.values(this.props.player)[0]
    const {icon, currentPosition } = player
    return properties.map(({name, price, id}) => (
      <BoardTile key={id} {...{name, price, id, icon, currentPosition}}/>
    ))
  }

  render() {
    const tempStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column'
    }
    const player = Object.values(this.props.player)[0]
    const { cash, icon, currentPosition } = player
    const playerProps = { cash, icon, currentPosition }
    return (
      <div style={tempStyle}>
        <button onClick={() => this.startTurn()}>
          Start turn
        </button>
        <Player {...playerProps}/>
        {this.propertiesRender()}
      </div>
    )
  }
}

const mapStateToProps = ({property, player}) => ({
  property, player
})

const mapDispatchToProps = dispatch => ({
  receivePlayer: (player) => dispatch(receivePlayer(player))
})

const Board = connect(mapStateToProps, mapDispatchToProps)(BoardPresentational)

export default Board
