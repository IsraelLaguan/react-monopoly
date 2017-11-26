import { GET_CHANCE } from '../actions/chance_actions'

const defaultState = {
  chance: {}
}

const ChanceReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case GET_CHANCE:
      const chance = state.chance
      chance.used = true
      const chanceObj = {[chance.id]: chance}
      return {...state, ...chanceObj}
    default:
      return state
  }
}

export default ChanceReducer
