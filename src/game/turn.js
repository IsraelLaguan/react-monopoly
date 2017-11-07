import Player from './player'
import Die from './die'

export default class Turn {
  constructor({property, player}) {
    this.property = property
    this.player = new Player(player)
    this._die = new Die()
  }

  exportData() {
    const player = this.player.exportData()
    return { property: this.property, player }
  }

  startTurn() {
    const diceRollValue = this._die.roll()
    console.log(diceRollValue);
    this.player.move(diceRollValue)
    console.log(this.player);
  }

}
