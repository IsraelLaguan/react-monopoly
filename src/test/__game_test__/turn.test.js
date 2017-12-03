import Turn from '../../game/turn'
jest.mock('../../game/player')
import Player from '../../game/player'
jest.mock('../../game/die')
import Die from '../../game/die'

const playerData = {
  id: 0,
  icon: 'http://www.drovevets.co.uk/images/icon_dog.png',
  cash: 300,
  deeds: new Set,
  currentPosition: 0,
  cards: new Set,
  inJail: false,
  turnsLost: 0,
}
// const player = new Player(playerData)

const mockDeed = {
  id: 1,
  name: 'Test Ave.',
  type: 'deed',
  price: 200,
  sets: [],
  owner: null,
  improvements: 0
}

describe('test filler',() => it('fills', () => expect(true).toEqual(true)))
describe('Turn game class', () => {

  let turnInstance
  describe('constructor', () => {

    beforeEach(() => {
      turnInstance = new Turn({mockDeed,playerData})
    })

    it('creates an instance of new Player', () => {
      // console.log(turnInstance)
      // turnInstance = new Turn(mockDeed, {})
      // console.log('asdfasdfasdfs');
      // console.log(turnInstance);
      console.log(Array);
      expect(turnInstance.player).toBeInstanceOf(Player)
    })
  })
})
