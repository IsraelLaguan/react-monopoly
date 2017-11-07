import Properties from '../database/properties'
import Die from './die'

export default class BoardComponent {
  constructor(player) {
    this._board = Properties
    this._currentPlayer = player
    this._die = new Die()
  }

  changePlayerTo(player) {
    this._currentPlayer = player
    return this
  }

  startTurn() {
    const diceRollValue = this._die.roll()
    this._currentPlayer.move(diceRollValue)
    const currentSquare = this._getCurrentSquare()
    return this
  }

  _getCurrentSquare() {
    const playerPos = this._currentPlayer.currentPosition
    return Properties[`${playerPos}`]
  }
}
