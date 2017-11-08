import React, { Component } from 'react'
import Game from '../../game/game'
import BoardTile from './board_tile'
import { connect } from 'react-redux'
import Player from '../player/player'
import Turn from '../../game/turn'
import { receivePlayer } from '../../actions/player_actions'
import { receiveProperty } from '../../actions/property_actions'

class BoardPresentational extends Component {
  constructor() {
    super()
    this.state = {
      player: {},
      showPrompt: false,
      currentPlayer: 0
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
    this.turn = new Turn({player: currPlayer, property})
    this.turn.startTurn()
    const exportedData = this.turn.exportData()
    this.updateBoard()
    this.setState({showPrompt: !this.state.showPrompt})
  }

  updateBoard() {
    const currPlayer = Object.values(this.props.player)[0]
    const currentPlayerId = 0
    const exportedData = this.turn.exportData()
    const playerData = exportedData.player
    const propertyData = exportedData.property
    const playerDispatchData = {[currentPlayerId]:{...playerData}}
    this.props.receivePlayer(playerDispatchData)
  }

  purchase() {
    this.turn.purchase()
    this.updateBoard()
    this.setState({showPrompt: !this.state.showPrompt})
    const exportedData = this.turn.exportData()
    const propertyData = exportedData.property
    const playerPosition = exportedData.player.currentPosition
    this.props.receiveProperty(propertyData)
  }

  prompt() {
    return (
      <div>
        Purchase?
        <button onClick={() => this.purchase()}>
          Yes
        </button>
      </div>
    )
  }

  propertiesRender() {
    const properties = Object.values(this.props.property)
    const player = Object.values(this.props.player)[0]
    const {icon, currentPosition } = player
    return properties.map(({name, price, id, owner}) => (
      <BoardTile key={id} {...{name, price, id, icon, currentPosition, owner}}/>
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
        {this.state.showPrompt ? this.prompt() : null}
        {this.propertiesRender()}
      </div>
    )
  }
}

const mapStateToProps = ({property, player}) => ({
  property, player
})

const mapDispatchToProps = dispatch => ({
  receivePlayer: (player) => dispatch(receivePlayer(player)),
  receiveProperty: (property) => dispatch(receiveProperty(property))
})

const Board = connect(mapStateToProps, mapDispatchToProps)(BoardPresentational)

export default Board
