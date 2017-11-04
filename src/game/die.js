export default class Die {
  constructor() {
  }

  roll() {
    return Math.ceil(Math.random() * 6)
  }

}
