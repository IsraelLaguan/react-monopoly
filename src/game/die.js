export default class Die {
  constructor() {
    this.value = 0
  }

  roll() {
    this.value = Math.ceil(Math.random() * 6)
    return this
  }

  addRoll() {
    this.value += Math.ceil(Math.random() * 6)
    return this
  }
}
