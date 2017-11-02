import Player from './player'

export default class Game {
  constructor() {
    console.log('welcome to monopoly!')
  }

  gameEnd() {
    const notBroke = this.players.filter(({cash}) > 0)
    return notBroke.size === 1
  }

  buildPlayers(selectionsArr) {
    this.players = selectionsArr.map((el) => {
      return new Player(el)
    })
    return this
  }

}
