import {ChancePresentational} from '../../components/board_center/board_center_prompts/chance'
jest.mock('../../game/turn')
jest.mock('../../game/player')
jest.mock('../../game/turn')
import Properties from '../../database/properties'
import Players from '../../database/players'
import Chance from '../../database/chance'
import Player from '../../game/player'
import Turn from '../../game/turn'
import {truthy} from '../../game/helpers/helpers'
//relies on properties.js database
describe('Chance Component', () => {
  let presentational
  beforeEach(() => {
    const player = new Player()
    const turn = new Turn()
    turn.player = player
    presentational = new ChancePresentational()
    presentational.props = {
      property: Properties,
      turn,
      chance: Chance,
      receivePlayer: () => jest.fn(),
      receiveProperty: () => jest.fn()
    }
    presentational.card = {}
    presentational.turn = {
      player: {},
      changePlayerCash: () => jest.fn(),
      changePlayerPosition: () => jest.fn()
    }
  })
  describe('Chance componentWillMount', () => {
    beforeEach(() => {
      presentational.componentWillMount()
    })
    it('makes an instance of this.turn from this.props.turn', () => {
      expect(presentational.turn).toEqual(presentational.props.turn)
    })
    it('makes an instance of this.player from this.props.player', () => {
      expect(presentational.player).toEqual(presentational.props.turn.player)
    })
    it ('always gets a valid chance card from object (never undefined)', () => {
      for (let i = 0; i < 100; i++) {
        presentational.componentWillMount()
        expect(truthy(presentational.card)).toEqual(true)
      }
    })
  })

  describe('_isProperty getter', () => {
    beforeEach(() => {
      presentational.card.position = 1
    })
    it('returns true if position attribute exists', () => {
      expect(presentational._isProperty).toEqual(true)
    })
    it('returns false if no position attribute', () => {
      delete presentational.card.position
      expect(presentational._isProperty).toEqual(false)
    })
    it('returns false if position attribute is null', () => {
      presentational.card.position = null
      expect(presentational._isProperty).toEqual(false)
    })
  })

  describe('_isCashChangingCard', () => {
    it('returns true if cash attribute exists', () => {
      presentational.card.cash = 100
      expect(presentational._isCashChangingCard).toEqual(true)
    })
    it('returns true if cash attribute does not exist', () => {
      delete presentational.card.cash
      expect(presentational._isCashChangingCard).toEqual(false)
    })
  })

  describe('_passedGo', () => {
    beforeEach(() => {
      presentational.player = {}
    })
    it('returns true if player position inverts (passed go)', () => {
      presentational.player.currentPosition = 20
      presentational.card.position = 3
      expect(presentational._passedGo).toEqual(true)
    })
    it('returns false if not inverted position', () => {
      presentational.player.currentPosition = 3
      presentational.card.position = 20
      expect(presentational._passedGo).toEqual(false)
    })
    it('returns false if player is already at go square', () => {
      presentational.player.currentPosition = 0
      expect(presentational._passedGo).toEqual(false)
    })
  })

  describe('_isPropertyOwner', () => {
    beforeEach(() => {
      presentational.player = {}
      presentational.player.id = 1
    })
    it('returns true if player id matches propertys owner id', () => {
      presentational.card.position = 1
      presentational.props.property[presentational.card.position].owner = 1
      expect(presentational._isPropertyOwner).toEqual(true)
    })
    it('returns false if player id does not match propertys owner id', () => {
      presentational.card.position = 3
      presentational.props.property[presentational.card.position].owner = 2
      expect(presentational._isPropertyOwner).toEqual(false)
    })
  })

  describe('_isOwned', () => {
    beforeEach(() => {
      presentational.card.position = 3
    })
    it('returns true if owner attribute of property is not null', () => {
      presentational.props.property[presentational.card.position].owner = 2
      expect(presentational._isOwned).toEqual(true)
    })
    it('returns false if owner attribute is null', () => {
      presentational.props.property[presentational.card.position].owner = null
      expect(presentational._isOwned).toEqual(false)
    })
  })

  describe('handleCardClick', () => {
    beforeEach(() => {
      presentational.setState = jest.fn()
      presentational.props = {
        receiveProperty: () => jest.fn(),
        receivePlayer: () => jest.fn()
      }
      presentational.props.property = {}
      presentational.player = {}
      presentational.turn = {}
      presentational.turn.changePlayerCash = jest.fn()
      presentational.turn.changePlayerPosition = jest.fn()
      presentational.turn.chargePlayerRent = jest.fn()
      presentational.turn.changePlayerPosition = jest.fn()
    })
    it('only calls this.turn.changePlayerCash if the chance card is a cash changing card', () => {
      presentational.card.cash = true
      presentational.handleCardClick()
      expect(presentational.turn.changePlayerCash).toBeCalled()
      expect(presentational.turn.changePlayerPosition).not.toBeCalled()
      expect(presentational.turn.chargePlayerRent).not.toBeCalled()
    })
    it('only calls this.turns.changePlayerPosition if go to jail', () => {
      presentational.card.name = 'Go to Jail'
      presentational.handleCardClick()
      expect(presentational.turn.changePlayerPosition).toBeCalled()
      expect(presentational.turn.changePlayerCash).not.toBeCalled()
      expect(presentational.turn.chargePlayerRent).not.toBeCalled()
    })
    describe('conditions in else block', () => {
      beforeEach(() => {
        presentational.card.cash = false
        presentational.card.name = null
        presentational.card.position = false
        presentational.props.property = {
          4: {owner: null},
          20: { owner: null}
        }
      })
      it('gives money if pass go conditions met', () => {
        presentational.player.currentPosition = 20
        presentational.card.position = 4
        presentational.handleCardClick()
        expect(presentational.turn.changePlayerCash).toBeCalled()
      })
      it('calls position change', () => {
        presentational.player.currentPosition = 20
        presentational.card.position = 4
        presentational.handleCardClick()
        expect(presentational.turn.changePlayerPosition).toBeCalled()
      })
      it('charges rent if owned and is not the owner', () => {
        
      })
    })
  })
})
