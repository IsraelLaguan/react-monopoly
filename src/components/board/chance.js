import React, {Component} from 'react'
require('../../game/helpers/helpers')

class ChancePresentational extends Component {
  constructor(turn) {
    this.state = {
      show: false
    }
    this.turn = turn
    this.player = turn.player
    const RNG = Math.random() * (this.props.chance.size - 1)
    const rand = Math.floor(RNG)
    this.card = this.props.chance[rand]
  }

  handleClick() {
    if (this._isCashChangingCard) {
      this.turn.changePlayerCash(this.card.cash)
    } else if (this._isProperty) {
      if (this._passedGo) {
        this.turn.changePlayerCash(200)
      }
      this.turn.changePlayerPosition(this.card.position)
    }
    this.updateBoard()
    this.setState({show: true})
  }

  get _isProperty() {
    return truthy(this.card.position)
  }

  get _isCashChangingCard() {
    return truthy(this.card.cash)
  }

  get _passedGo() {
    const {player, card} = this
    return player.currentPosition > card.position &&
      player.currentPosition !== 0
  }

  get _isPropertyOwner() {
    return this.player.id === this.props.property[this.card.position].owner
  }

  async updateBoard() {
    const { playerData, propertyData } = this.turn
    this.props.receiveProperty(propertyData)
    this.props.receivePlayer(playerData)
  }

  render() {
    const chanceStyle = {
      border:'1px solid black',
      width: '200px',
      height: '100px'
    }
    return (
      <button style={chanceStyle} onClick={() => this.handleClick()}>
        {this.state.show ? this.chance.name : 'CHANCE!'}
      </button>
    )
  }
}


const mapStateToProps = ({property, player, chance}) => ({
  property, player, chance
})

const mapDispatchToProps = dispatch => ({
  receivePlayer: (player) => dispatch(receivePlayer(player)),
  receiveProperty: (property) => dispatch(receiveProperty(property))
})

const Chance = connect(mapStateToProps, mapDispatchToProps)(ChancePresentational)

export default Chance
