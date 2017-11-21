export default class Chance {
  constructor({players, name, position, cash, chargeAll, currentPlayer}) {
    this._currentPlayer = currentPlayer
    this._players = players
    this._name = name
    this._position = ~position ? position : null
    this._cash = ~cash ? cash : null
    this._chargeAll = chargeAll ? chargeAll : null
    this._newPlayers = {}
  }

  get players() {
    return this._players
  }

  use() {
    const currentPlayer = new Player(this._currentPlayer)
    const players = Object.values(this._players)
                    .filter(({id}) => currentPlayer.id !== id)
    if (this._chargeAll && this._cash) {
      players.map(player => {
        player = new Player(player)
        player.changeCash(-this._cash)
        this._newPlayers[player.id] = player.exportData
        currentPlayer.changeCash(this._cash)
      })
      this._newPlayers[player.id] = player.exportData
    } else if (this._cash) {
      this._player.changeCash(this._cash)
    }

    if (this._position) {
      this._player.moveToPostion(this._position)
    }
  }

  chargeAll() {

  }
}
