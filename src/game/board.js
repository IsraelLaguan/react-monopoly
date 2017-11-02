import Squares from '../database/squares'
import Dice from './die'

export default class Board {
  constructor() {
    this.board = Squares
    this.currentPlayer = 0
  }

  changeTurn() {
    this.currentPlayer += 1
    return this
  }

  startTurn() {
    const diceRollValue = new Die().roll()
    this.currentPlayer.move(diceRollValue)
    const currentSquare = this.getCurrentSquare()
  }

  getCurrentSquare() {
    const playersPosition = this.currentPlayer.currentPosition
    return Squares[`${playersPosition}`]
  }
}
