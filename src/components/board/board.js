import React, { Component } from 'react'
import Game from '../../game/game'
import BoardTile from './board_tile'
import { connect } from 'react-redux'
import Player from '../player/player'
import Turn from '../../game/turn'
import BoardCenter from '../board_center/board_center'
import { receivePlayer } from '../../actions/player_actions'
import { receiveProperty } from '../../actions/property_actions'
import * as boardStyle from './board_styles'
import Chance from '../../database/chance'
import { truthy } from '../../game/helpers/helpers.js'
require('../../game/helpers/helpers.js')

class BoardPresentational extends Component {
  constructor() {
    super()
    this.state = {
      player: {},
      showPurchasePrompt: false,
      showRentedPrompt: false,
      showChancePrompt: false,
      showInJailPrompt: false,
      currentPlayer: 0,
      playerCount: 0,
      chance: null
    }
  }

  clearPrompts() {
    this.setState({
      showPurchasePrompt: false,
      showRentedPrompt: false,
      showChancePrompt: false,
      showInJailPrompt: false
    })
  }

  componentWillMount() {
    const playerCount = this.props.player.size
    this.setState({playerCount})
  }

  startTurn() {
    this.clearPrompts()
    let {player, property} = this.props
    let currPlayer = player[this.state.currentPlayer]
    this.turn = new Turn({player: currPlayer, property})
    if (player.turnsLost > 0) {
      player.turnsLost -= 1
      this.setState({showInJailPrompt: true})
    } else {
      this.turn.startTurn()
    }
    this.updateBoard()
    this.handlePossiblePropertyOwnership()
  }

  handlePossiblePropertyOwnership() {
    const { playerData, propertyData } = this.turn
    const propertyOwner = this._currentPropertyOwner(playerData.currentPosition)
    const propertyType = this.props.property[playerData.currentPosition].type
    if (propertyType === 'action') { //will have to add lots of chance/chest/jail logic later
      this.toggleChanceCard()
      // this.nextTurn()
    } else if (!propertyOwner) {
      this.handleNoOwnerForProperty()
    } else if (propertyOwner.id === playerData.id) {
      this.handleIsPropertyOwner()
    } else if (propertyOwner && propertyOwner.id !== playerData.id) {
      this.handleIsOwnedByOtherPlayer()
    }
  }

  toggleChanceCard() {
    this.clearPrompts()
    this.setState({showChancePrompt: !this.state.showChancePrompt})
  }

  handleNoOwnerForProperty() {
    this.clearPrompts()
    this.setState({showPurchasePrompt: true})
  }

  handleIsPropertyOwner() {
    this.nextTurn()
  }

  handleIsOwnedByOtherPlayer() {
    const { currentPosition } = this.turn.playerData
    const { owner } = this.turn.propertyData[currentPosition]
    this.turn.chargePlayerRent()
    this.giveMoneyTo(owner)
    this.updateBoard()
    this.clearPrompts()
    this.setState({showRentedPrompt: true})
  }

  giveMoneyTo(id) {
    const { currentPosition } = this.turn.playerData
    const { rent } = this.turn.propertyData[currentPosition]
    this.props.player[id].cash += rent[0]
  }

  _currentPropertyOwner(propertyId) {
    const {player} = this.props
    for (let playerId in player) {
      if (player[playerId].deeds.has(propertyId)) {
        return player[playerId]
      }
    }
    return null
  }

  async updateBoard() {
    const { playerData, propertyData } = this.turn
    this.props.receiveProperty(propertyData)
    await this.props.receivePlayer(playerData)
    this.setState({player: playerData})
  }

  purchase() {
    this.turn.purchase()
    this.updateBoard()
    // setTimeout(() => this.nextTurn(), 500)
    this.nextTurn()
  }

  nextTurn() {
    const { currentPlayer, playerCount } = this.state
    let currPlayerId
    if (currentPlayer === playerCount - 1) {
      currPlayerId = 0
    } else {
      currPlayerId = currentPlayer + 1
    }
    this.clearPrompts()
    this.setState({
      currentPlayer: currPlayerId,
    })
  }

  boardTiles(startIdx, endIdx = null) {
    const properties = Object.values(this.props.property)
    endIdx = endIdx ? endIdx : properties.length
    let playerId = this.props.player[this.state.currentPlayer].id
    return properties.slice(startIdx, endIdx).map(data => {
      let { name, price, id, owner } = data
      let ownerIcon
      if (truthy(owner)) {
        ownerIcon = this.props.player[owner].icon
      } else {
        ownerIcon = null
      }
      let playerIcons = this._playersAtPosition(id).map(([_, {icon}]) => icon)
      let icons = playerIcons ? playerIcons : []
      let boardTileProps = {name, price, id, icons, owner, playerId, ownerIcon}
      return <BoardTile key={id} {...boardTileProps}/>
    })
  }

  _playersAtPosition(id) {
    return Object.entries(this.props.player).filter(([playerId, player]) => {
      return player.currentPosition === id
    })
  }

  topBoard() {return this.boardTiles(20, 31)}
  leftBoard() {return this.boardTiles(11, 20)}
  rightBoard() {return this.boardTiles(31)}
  bottomBoard() {return this.boardTiles(0, 11)}

  render() {
    const player = this.props.player[this.state.currentPlayer]
    const turn = this.turn
    const { cash, icon, currentPosition, turnsLost } = player
    const property = this.props.property[player.currentPosition]
    const propertyName = property.name
    const playerProps = { cash, icon, currentPosition }
    const { showPurchasePrompt, showRentedPrompt, showChancePrompt } = this.state
    let ownerId = property.owner
    let ownerName
    if (ownerId || ownerId === 0) {
      ownerName = this.props.player[ownerId].icon
    } else {
      ownerName = null
    }
    const boardCenterProps = {
      property, propertyName, showPurchasePrompt,
      showRentedPrompt, showChancePrompt,
      player: playerProps, turn, turnsLost,
      ownerName: ownerName ? ownerName : '',
      startTurn: () => this.startTurn(),
      purchase: () => this.purchase(),
      nextTurn: () => this.nextTurn(),
      toggleChanceCard: () => this.toggleChanceCard(),
      giveMoneyTo: (id) => this.giveMoneyTo(id)
    }
    if (this.state.chance) {
      boardCenterProps['chance'] = this.turn
    } else {
      boardCenterProps['chance'] = null
    }
    return (
      <div style={boardStyle.tempStyle}>
        <div style={boardStyle.topStyle}>
          {this.topBoard()}
        </div>
        <div style={boardStyle.midContainerStyle}>
          <div style={boardStyle.leftStyle}>
            {this.leftBoard()}
          </div>
          <div>
            <BoardCenter {...boardCenterProps}/>
          </div>
          <div style={boardStyle.rightStyle}>
            {this.rightBoard()}
          </div>
        </div>
        <div style={boardStyle.bottomStyle}>
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
export { BoardPresentational }
