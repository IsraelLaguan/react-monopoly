import Player from './player'
import Die from './die'
export const self = "self"

export default class Turn {
  constructor({property, player}) {
    this.property = property
    this.player = new Player(player)
    this._die = new Die()
  }

  exportProperty() {
    return {...this.property}
  }

  exportPlayer() {
    return this.player.exportData()
  }

  chargePlayer() {
    const rent = this.property[this.player.currentPosition].rent
    if (rent) {
      this.player.changeCash(-rent[0])
    }
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

Object.defineProperty(Turn.prototype, 'playerData', {
  get: function() {
    return this.exportPlayer()
  }
})

Object.defineProperty(Turn.prototype, 'propertyData', {
  get: function() {
    return this.exportProperty()
  }
})
