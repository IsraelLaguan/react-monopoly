import Squares from '../database/squares'
import Die from './die'

export default class Board {
  constructor(player) {
    this._board = Squares
    this._currentPlayer = player
    this._die = new Die
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
    return this._board[`${playerPos}`]
  }
}
