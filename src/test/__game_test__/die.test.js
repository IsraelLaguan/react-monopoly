import Die from '../../game/die'

describe('Die class', () => {
  let die
  beforeEach(() => {
    die = new Die
  })
  describe('roll', () => {
    it('rolls a new valid value at random', () => {
      let value, valid
      for (let i = 0; i < 100; i ++) {
        value = die.roll()
        valid = value > 0 && value < 7
        expect(valid).toEqual(true)
      }
    })
  })
})
