import Squares from '../database/squares'

export default class Player {
  constructor(icon, id) {
    this.id = id
    this.cash = 100
    this.icon = icon
    this.deeds = new Set
    this.inJail = false
    this.turnsLost = 0
    this.cards = new Set
    this.currentPosition = 0
    this.maxSqId = Object.keys(Squares).length
  }

  exportData() {
    const { cash, icon, deeds, inJail, turnsLost, cards, currentPosition } = this
    return { cash, icon, deeds, inJail, turnsLost, cards, currentPosition }
  }

  move(diceRoll) {
    this.currentPosition += diceRoll
    if (this.currentPosition > this.maxSqId) {
      this.currentPosition -= this.maxSqId
    }
    return this
  }

  hasDeed(id) {
    return this.deeds.has(id)
  }

  skipTurn() {
    this.turnsLost -= 1
    return this
  }

  goToJail() {
    this.turnsLost = 3
    return this
  }

  getDeeds(allDeeds) {
    return allDeeds.filter(key => {
      let keyId = allDeeds[key].id
      return this.deeds.has(`${keyId}`)
    })
  }

  changeCash(amt) {
    this.cash += amt
  }
}
