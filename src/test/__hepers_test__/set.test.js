import * as helpers from '../../game/helpers/helpers.js'

describe('Set Monkeypatches', () => {
  let totalSet
  beforeEach(() => {
    totalSet = new Set([1,2,3,4,5,6,7,8])
  })

  describe('Set#includesAll', () => {
    it('properly tests true', () => {
      let subSet = new Set([1,3,5])
      let test = totalSet.includesAll(subSet)
      expect(test).toEqual(true)
    })
    it('properly tests false', () => {
      let subSet = new Set([1,3,5,10])
      let test = totalSet.includesAll(subSet)
      expect(test).toEqual(false)
    })
    it('can also accept an array of values', () => {
      let subSet = [1,3,5]
      let test = totalSet.includesAll(subSet)
      expect(test).toEqual(true)
    })
  })

  describe('Set#filter', () => {
    it('properly filters by boolean', () => {
      let subSet = totalSet.filter((num) => num < 6)
      expect(subSet.includesAll(new Set([1,2,3,4,5]))).toEqual(true)
      expect(subSet.size).toEqual(5)
    })
  })
})

describe('Array monkeypatches', () => {
  let totalArr
  beforeEach(() => {
    totalArr = [1,2,3,4,5,6]
  })
  describe('Array#includesAll', () => {
    it('returns true for valid subarray', () => {
      let subArr = [1,2,3]
      let test = totalArr.includesAll(subArr)
      expect(test).toEqual(true)
    })
    it('returns false for valid subarray', () => {
      let subArr = [1,2,3,10]
      let test = totalArr.includesAll(subArr)
      expect(test).toEqual(false)
    })
    it('works if you use a set instead of subArr', () => {
      let subSet = new Set([1,2,3,10])
      let test = totalArr.includesAll(subSet)
      expect(test).toEqual(false)
    })
  })
})

describe('Object monkeypatches', () => {
  expect(true).toEqual(true)
})
