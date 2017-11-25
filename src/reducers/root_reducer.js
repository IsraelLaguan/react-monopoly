import PropertyReducer from './property_reducer'
import { combineReducers } from 'redux'
import PlayerReducer from './player_reducer'
import ChanceReducer from './chance_reducer'

const RootReducer = combineReducers ({
  property: PropertyReducer,
  player: PlayerReducer,
  chance: ChanceReducer
})

export default RootReducer
