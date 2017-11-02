const deed = 'deed'
const chance = 'chance'
const treasure = 'treasure'

export default class SquareDeed {
  constructor(data, player) { //data from redux, player object
    this.name = data.name
    this.type = data.type
    this.price = data.price
    this.sets = data.sets
    this.owner = data.owner
    this.rent = data.rent
    this.houses = data.houses
    this.hotels = data.hotels
    this.player = this.player
  }

  exportData() {
    { name, type, price, sets, owner, rent, houses, hotels } = this
    const player = this.player.exportData()
    const deed = { name, type, price, sets, owner, rent, houses, hotels}
    return { player, deed }
  }

  ownedByPlayer() {
    this.owner === this.player.id
  }

  addHouse() {
    this.houses += 1
    player.
    return this
  }

  addHotel() {
    this.houses += 1
    return this
  }

  setOwner(playerIdx) {
    this.owner = playerIdx
    this._purchase()
  }

  payRent() {
    this.player.ChangeCash(-this.rent)
  }

  _purchase() {
    this.player.changeCash(this.price)
  }
}
