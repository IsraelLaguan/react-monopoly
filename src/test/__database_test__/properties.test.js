import Properties, {props, action, buildProperties} from '../../database/properties'
require('../../game/helpers/helpers')

function hasAttrs(arr, obj){ //for deeds/action builders test
  for (let key in obj) {
    if (!arr.includes(key)) {
      return false
    }
  }
  return true
}

describe('Properties database', () => {
  let deeds, actions
  beforeEach(() => {
    deeds = props.filter((tile) => tile[1] === 'deed')
    actions = props.filter(tile => tile[1] === 'action')
  })
  describe('props array', () => {
    it('has every tile as a deed or action', () => {
      expect(deeds.length + actions.length).toEqual(props.length)
    })
  })
  describe('props array of tiles', () => {
    it('has all deed tiles with 5 elements', () => {
      expect(deeds.every(tile => tile.length === 5)).toEqual(true)
    })
    it('has action tiles with 2 elements', () => {
      expect(actions.every(tile => tile.length === 2)).toEqual(true)
    })
  })

  describe('action builder', () => {
    const attrs = ['id', 'name', 'type', 'price']
    it('creates an object with 4 attributes', () => {
      expect(actions.every((tile, idx) => action(tile, idx).size === 4)).toEqual(true)
    })
    it('has attributes of id, name, type, and price', () => {
      expect(actions.every((tile, idx) => hasAttrs(attrs, action(tile, idx)))).toEqual(true)
    })
  })

  describe('deed builder', () => {
    it('creates an object with every attribute', () => {
      const attrs = ['id', 'name', 'type', 'price', 'sets', 'rent', 'owner', 'improvements']
      expect(actions.every((tile, idx) => hasAttrs(attrs, action(tile, idx)))).toEqual(true)
    })
  })

  describe('buildProperties function', () => {
  })
})
