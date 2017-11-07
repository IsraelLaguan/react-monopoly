import { RECEIVE_PLAYER } from '../actions/player_actions'

const defaultState = {
  player: {}
}

const PlayerReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PLAYER:
      const player = action.player
      return {...state, ...player}
    default:
      return state
  }
}

export default PlayerReducer
