import { RECEIVE_PROPERTY} from '../actions/property_actions.js'

const defaultState = {
  property: {}
}

const PropertyReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PROPERTY:
      const property = action.property
      return property
    default:
      return state
  }
}

export default PropertyReducer
