import Die from '../../game/die'

describe('Die class', () => {
  let die
  beforeEach(() => {
    die = new Die
  })
  describe('roll', () => {
    it('rolls a new valid value at random', () => {
      let roll, valid, checkStill
      const rollVals = new Set
      valid = true
      for (let i = 0; i < 100; i ++) {
        roll = die.roll()
        rollVals.add(roll)
        if(!(valid < 7 && valid > 0) && checkStill) {
          valid = false
          checkStill = false
        }
      }
      expect(rollVals.size).toEqual(6)
      expect(valid).toEqual(true)
    })
  })
})
