import Turn from '../../game/turn'
jest.mock('../../game/player')
import Player from '../../game/player'
jest.mock('../../game/die')
import Die from '../../game/die'

const player = {
  id: 0, cash: 300, deeds: new Set,  currentPosition: 0,
  cards: new Set, inJail: false, turnsLost: 0,
  icon: 'http://www.drovevets.co.uk/images/icon_dog.png',
}
// const player = new Player(playerData)

const mockDeed = {
  id: 1, name: 'Test Ave.', type: 'deed',
  price: 200, rent: [20, 100, 300],
  sets: [], owner: null,
  improvements: 0
}

const mockAction = {
  id: 2,
  name: 'Community Chest',
  type: 'action'
}

const property = { 0: mockDeed, 1: mockAction }

describe('Turn game class', () => {
  let turnInstance
  beforeEach(() => {
    turnInstance = new Turn({property, player})
  })

  describe('constructor', () => {
    it('creates an instance of new Player', () => {
      expect(turnInstance.player).toBeInstanceOf(Player)
    })
    it('creates an instance of new Die', () => {
      expect(turnInstance._die).toBeInstanceOf(Die)
    })
    it('sets the current deed information as this.property', () => {
      expect(turnInstance.property).toEqual(property)
    })
  })

  describe('getter propertyData', () => {
    it('returns exactly property data', () => {
      expect(turnInstance.propertyData).toEqual(property)
    })
  })

  describe('getter playerData', () => {
    it('calls player.exportData()', () => {
      turnInstance.player.exportData = jest.fn()
      turnInstance.playerData
      expect(turnInstance.player.exportData).toBeCalled()
    })
  })

  describe('chargePlayerRent', () => {
    it('calls player class changeCash', () => {
      turnInstance.player.currentPosition = 0
      turnInstance.chargePlayerRent()
      expect(turnInstance.player.changeCash).toBeCalled()
    })
    it('is not called if position is not a deed', () => {
      turnInstance.player.currentPosition = 1
      turnInstance.chargePlayerRent()
      expect(turnInstance.player.changeCash).not.toBeCalled()
    })
  })

  describe('changePlayerCash', () => {
    it('calls player class changeCash', () => {
      turnInstance.changePlayerCash(5)
      expect(turnInstance.player.changeCash).toBeCalled()
    })
  })

  describe('changePlayerPosition', () => {
    it('changes player position', () => {
      turnInstance.changePlayerPosition(10)
      expect(turnInstance.player.currentPosition).toEqual(10)
    })
  })

  describe('startTurn', () => {
    it('calls player class method move', () => {
      turnInstance.startTurn()
      expect(turnInstance.player.move).toBeCalled()
    })

    describe('cash change', () => {
      beforeEach(() => {
        turnInstance.changePlayerCash = jest.fn()
        turnInstance.player.currentPosition = 20
      })
      it('calls changePlayerCash if passed go', () => {
        turnInstance.player.move = jest.fn(() => {
          turnInstance.player.currentPosition = 1
        })
        turnInstance.startTurn()
        expect(turnInstance.changePlayerCash).toBeCalled()
      })

      it('does not changePlayerCash if not passed go', () => {
        it('calls changePlayerCash if passed go', () => {
          turnInstance.player.move = jest.fn(() => {
            turnInstance.player.currentPosition = 26
          })
          turnInstance.startTurn()
          expect(turnInstance.changePlayerCash).not.toBeCalled()
        })
      })
    })
  })

  describe('purchase', () => {
    beforeEach(() => {
      turnInstance.player.currentPosition = 0
      turnInstance.player.deeds = []
      turnInstance.player.deeds.add = jest.fn()
    })
    it ('adds deed to player set of deeds if player.changeCash returns true', () => {
      turnInstance.player.changeCash = jest.fn( _ => true)
      turnInstance.purchase()
      expect(turnInstance.player.deeds.add).toBeCalled()
    })
    it ('does not add deed if player.changeCash returns false', () => {
      turnInstance.player.changeCash = jest.fn( _ => false)
      turnInstance.purchase()
      expect(turnInstance.player.deeds.add).not.toBeCalled()
    })
  })
})
