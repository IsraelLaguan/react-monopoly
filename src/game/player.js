

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
  }

  exportData() {
    { cash, icon, deeds, inJail, turnsLost, cards, currentPosition } = this
    return { cash, icon, deeds, inJail, turnsLost, cards, currentPosition }
  }

  move(diceRoll) {
    this.currentPosition += diceRoll
    if (currentPosition > 2) {
      this.currentPosition -= 2
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

  rollDie() {
    return Math.ceil(Math.random() * 6)
  }

  getDeeds(deedSet) {
    return deedSet.filter(({id}) =>  this.deeds.has(id))
  }

  changeCash(amt) {
    this.player.cash += amt
  }
}
