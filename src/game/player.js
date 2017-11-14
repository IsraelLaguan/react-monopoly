import Properties from '../database/properties'

export default class Player {
  constructor({icon, id, cash, deeds, inJail, turnsLost, cards, currentPosition}) {
    this.id = id
    this.cash = cash
    this.icon = icon
    this.deeds = deeds
    this.inJail = inJail
    this.turnsLost = turnsLost
    this.cards = cards
    this.currentPosition = currentPosition
    this.maxSqId = Object.keys(Properties).length
  }

  exportData() {
    const { id, cash, icon, deeds, inJail, turnsLost, cards, currentPosition } = this
    return { id, cash, icon, deeds, inJail, turnsLost, cards, currentPosition }
  }

  move(diceRoll) {
    this.currentPosition += 1
    if (this.currentPosition >= this.maxSqId) {
      this.currentPosition -= this.maxSqId
      this.cash += 200
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
    if (this.cash < 0) {
      this.cash += -amt
      return false
    }
    return true
  }
}
