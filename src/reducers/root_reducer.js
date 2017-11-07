import PropertyReducer from './property_reducer'
import { combineReducers } from 'redux'
import PlayerReducer from './player_reducer'

const RootReducer = combineReducers ({
  property: PropertyReducer,
  player: PlayerReducer
})

export default RootReducer
