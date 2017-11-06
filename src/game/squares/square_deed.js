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
    return { name, type, price, sets, owner, rent, houses, hotels}
  }

  ownedByPlayer() {
    this.owner === this.player.id
  }

  addHouse() {
    this.houses += 1
    return this
  }

  addHotel() {
    this.houses += 1
    return this
  }

  setOwner(playerIdx) {
    this.owner = playerIdx
    return this
  }

  payRent() {
    this.player.ChangeCash(-this.rent)
    return this
  }

  purchase() {
    this.player.changeCash(this.price)
    return this
  }
}
