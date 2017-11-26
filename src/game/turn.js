import Player from './player'
import Die from './die'
export const self = "self"

export default class Turn {
  constructor({property, player}) {
    this.property = property
    this.player = new Player(player)
    this._die = new Die()
  }

  get propertyData() {
    return {...this.property}
  }

  get playerData() {
    return this.player.exportData()
  }

  chargePlayerRent() {
    const rent = this.property[this.player.currentPosition].rent
    if (rent) {
      this.player.changeCash(-rent[0])
    }
  }

  changePlayerCash(amt) {
    this.player.changeCash(amt)
  }

  changePlayerPosition(id) {
    this.player.currentPosition = id
  }

  startTurn() {
    const diceRollValue = this._die.roll()
    this.player.move(diceRollValue)
    return this
  }

  purchase() {
    const positionId = this.player.currentPosition
    const currentProperty = this.property[`${positionId}`]
    const cost = currentProperty.price
    if (this.player.changeCash(-cost)) {
      this.player.deeds.add(this.player.currentPosition)
      currentProperty.owner = this.player.id
      return true
    } else {
      return false
    }
  }
}
