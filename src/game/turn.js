import Player from './player'
import Die from './die'

export default class Turn {
  constructor({property, player}) {
    this.property = property
    this.player = new Player(player)
    this._die = new Die()
  }

  exportProperty() {
    return { ...this.property }
  }

  exportPlayer() {
    const player = this.player.exportData()
    return {[this.player.id]: {...player}}
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
      currentProperty.owner = this.player.id
      return true
    } else {
      return false
    }
  }
}
