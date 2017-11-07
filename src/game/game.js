import Player from './player'
import Board from './board'


export default class Game {
  constructor() {
    this.board = new Board
    this.player = new Player('dog', 0)
  }

  gameStart() {
    this.board.changePlayerTo(this.player)
    this.board.startTurn()
  }

  gameEnd() {
    const notBroke = this.players.filter(({cash}) => cash > 0)
    return notBroke.size === 1
  }

  _buildPlayers(selectionsArr) {
    this.players = selectionsArr.map((el) => {
      return new Player(el)
    })
    return this
  }

  startTurn() {
    this.board.startTurn()
  }
}
