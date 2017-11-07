import Properties from '../../database/properties'
import Board from '../../game/board'

function Player() {
  this.currentPosition = 0
  this.move = jest.fn()
}

function Die() {
  this.roll = jest.fn()
}

describe('Board class', () => {
  let board, player1, player2, die
  beforeEach(() => {
    die = new Die
    player1 = new Player
    board = new Board(player1)
  })

  describe('constructor', () => {
    it('creates an instance of this.board', () => {
      expect(board._board).toEqual(Properties)
    })
    it('creates an instance of this._currentPlayer', () => {
      expect(board._currentPlayer).toEqual(player1)
    })
  })

  describe('changePlayerTo', () => {
    player2 = new Player
    it('sets to new player', () => {
      board.changePlayerTo(player2)
      expect(board._currentPlayer).toEqual(player2)
    })
  })

  describe('_getCurrentSquare', () => {
    it('gets correct position from Properties', () => {
      const currentSq = board._getCurrentSquare()
      expect(currentSq).toEqual(Properties['0'])
    })
  })
  describe('startTurn', () => {
    it('creates an instance of a die and rolls', () => {
      board._die.roll = jest.fn()
      board.startTurn()
      expect(board._die.roll).toBeCalled()
    })
  })
})
