import PropertyReducer from './property_reducer'
import { combineReducers } from 'redux'

const RootReducer = combineReducers ({
  properties: PropertyReducer
})

export default RootReducer
