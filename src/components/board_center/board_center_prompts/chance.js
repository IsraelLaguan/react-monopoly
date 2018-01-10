import React, {Component} from 'react'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'
import { receivePlayer } from '../../../actions/player_actions'
import { receiveProperty } from '../../../actions/property_actions'
import { truthy } from '../../../game/helpers/helpers.js'
require('../../../game/helpers/helpers.js')

class ChancePresentational extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      showOk: false
    }
  }

  componentWillMount() {
    this.turn = this.props.turn
    this.player = this.props.turn.player
    const RNG = Math.random() * (this.props.chance.size - 1)
    const rand = Math.floor(RNG)
    this.card = this.props.chance[rand]
  }

  handleCardClick() {
    if (this._isCashChangingCard) {
      this.turn.changePlayerCash(this.card.cash)
    } else if (this.card.name === 'Go to Jail'){ //will have to add jail counter
      this.turn.changePlayerPosition(this.card.position)
    } else {
      if (this._passedGo) {
        this.turn.changePlayerCash(200)
      }
      if (truthy(this.card.position)) {
        this.turn.changePlayerPosition(this.card.position)
        if (this._isNotOwner && this._isOwned) {
          this.turn.chargePlayerRent()
          this.props.giveMoneyTo(this.props.property[this.card.position].owner)
        }
      }
    }
    this.updateBoard()
    this.setState({show: true, showOk: true})
  }

  handleButtonClick() {
    this.setState({showOk: false})
    this.props.nextTurn()
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

  get _isNotOwner() {
    return this.player.id !== this.props.property[this.card.position].owner
  }

  get _isOwned() {
    return truthy(this.props.property[this.card.position].owner)
  }

  render() {
    const chanceStyle = {
      border:'1px solid black',
      width: '200px',
      height: '100px',
      backgroundColor: 'red'
    }
    return (
      <div>
        <button style={chanceStyle} onClick={() => this.state.showOk ? null : this.handleCardClick()}>
          {this.state.show ? this.card.name : 'CHANCE!'}
        </button>
        {
          this.state.showOk ?
          <Button color='primary' raised onClick={() => this.handleButtonClick()}>
            Ok
          </Button>
          :
          null
        }
      </div>
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
export {ChancePresentational}
