import Player from '../../game/player'
import Properties from '../../database/properties'

import * as helpers from '../../game/helpers/helpers.js'

describe('Player class', () => {
  let player
  beforeEach(() => {
    player = new Player('', 0)
  })

  describe('move', () => {
    it('changes players this.currentPosition', () => {
      const rollVal = 3
      player.move(rollVal)
      expect(player.currentPosition).toEqual(3)
    })
    it('wraps around if goes past this.maxSqId', () => {
      player.maxSqId = 100
      player.currentPosition = 99
      player.move(3)
      expect(player.currentPosition).toEqual(2)
    })
  })

  describe('hasDeed', () => {
    it('this.deeds finds ids', () => {
      player.deeds = new Set(['1','3'])
      const hasDeed = player.hasDeed('1')
      expect(hasDeed).toEqual(true)
    })
  })

  describe('skipTurn', () => {
    it('decriment players this.turnsLost', () => {
      player.turnsLost = 4
      player.skipTurn()
      expect(player.turnsLost).toEqual(3)
    })
  })

  describe('goToJail', () => {
    it('adds 3 to this.turnsLost counter', () => {
      player.turnsLost = 0
      player.goToJail()
      expect(player.turnsLost).toEqual(3)
    })
  })

  describe('getDeeds', () => {
    it('gets players deeds from all deeds', () => {
      player.deeds = new Set(['1', '2'])
      const playersDeeds = player.getDeeds(Properties)
      expect(Object.keys(playersDeeds)).toEqual(['1', '2'])
    })
  })

  describe('changeCash', () => {
    it('increments cash by set amount', () => {
      player.cash = 100
      player.changeCash(100)
      expect(player.cash).toEqual(200)
    })
  })
})
