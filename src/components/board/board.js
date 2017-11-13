import React, { Component } from 'react'
import Game from '../../game/game'
import BoardTile from './board_tile'
import { connect } from 'react-redux'
import Player from '../player/player'
import Turn from '../../game/turn'
import BoardCenter from './board_center'
import { receivePlayer } from '../../actions/player_actions'
import { receiveProperty } from '../../actions/property_actions'

class BoardPresentational extends Component {
  constructor() {
    super()
    this.state = {
      player: {},
      showPrompt: false,
      currentPlayer: 0,
      playerCount: 2
    }
  }

  componentWillMount() {
    const player = Object.values(this.props.player)[this.state.currentPlayer]
    this.setState({player})
  }

  startTurn() {
    let {player, property} = this.props
    const currPlayer = Object.values(this.props.player)[this.state.currentPlayer]
    this.turn = new Turn({player: currPlayer, property})
    this.turn.startTurn()
    this.updateBoard()
    this.setState({showPrompt: !this.state.showPrompt})
  }

  updateBoard() {
    const propertyDispatchData = this.turn.exportProperty()
    const playerDispatchData = this.turn.exportPlayer()
    this.props.receiveProperty(propertyDispatchData)
    this.props.receivePlayer(playerDispatchData)
    .then(() => {
      this.setState({
        player: Object.values(this.props.player)[this.state.currentPlayer]
      })
    })
  }

  purchase() {
    if(this.turn.purchase()) {
      console.log('successful purchase');
    } else {
      console.log('not enough monies');
    }
    this.updateBoard()
    this.setState({showPrompt: !this.state.showPrompt})
    this.nextTurn()
  }

  nextTurn() {
    // player: {},
    // showPrompt: false,
    // currentPlayer: 0,
    // playerCount: 2
    const { currentPlayer, playerCount } = this.state
    let currPlayerId
    if (currentPlayer === playerCount - 1) {
      currPlayerId = 0
    } else {
      currPlayerId = currentPlayer + 1
    }
    this.setState({currentPlayer: currPlayerId})
  }

  boardTiles(startIdx, endIdx = null) {
    const properties = Object.values(this.props.property)
    // const {icon, currentPosition } = this.state.player
    endIdx = endIdx ? endIdx : properties.length

    return properties.slice(startIdx, endIdx).map(data => {
      let { name, price, id, owner } = data
      // let player = this.props.player[owner]
      let that = this
      let player = Object.entries(this.props.player).filter(([playerId, player]) => {
        return player.currentPosition === id
      }).map(([playerId, {icon}]) => icon)
      if (id === 0) {
        console.log(this.props.player);
        debugger
      }
      // debugger
      let icons
      if (player) {
        icons = player
      } else {
        icons = null
      }
      let boardTileProps = {name, price, id, icons, owner}
      return <BoardTile key={id} {...boardTileProps}/>
    })
  }

  topBoard() {
    return this.boardTiles(20, 31)
  }

  leftBoard() {
    return this.boardTiles(11, 20)
  }

  rightBoard() {
    return this.boardTiles(31)
  }

  bottomBoard() {
    return this.boardTiles(0, 11)
  }

  render() {
    const tempStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'flex-start',
      flexDirection: 'column',
      width: '1000px',
      marginTop: '30px'
    }
    const topStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'flex-start',
      flexDirection: 'row'
    }
    const midContainerStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      flexDirection: 'row'
    }
    const leftStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column-reverse'
    }
    const rightStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column'
    }
    const bottomStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'row-reverse'
    }
    const player = Object.values(this.props.player)[this.state.currentPlayer]
    const { cash, icon, currentPosition } = player
    const playerProps = { cash, icon, currentPosition }
    const boardCenterProps = {
      player: playerProps,
      startTurn: () => this.startTurn(),
      purchase: () => this.purchase(),
      nextTurn: () => this.nextTurn()
    }
    return (
      <div style={tempStyle}>
        <div style={topStyle}>
          {this.topBoard()}
        </div>
        <div style={midContainerStyle}>
          <div style={leftStyle}>
            {this.leftBoard()}
          </div>
          <div>
            <BoardCenter {...boardCenterProps}/>
          </div>
          <div style={rightStyle}>
            {this.rightBoard()}
          </div>
        </div>
        <div style={bottomStyle}>
          {this.bottomBoard()}
        </div>
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
