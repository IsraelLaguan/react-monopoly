export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY'

export const receiveProperty = property => async (dispatch) => {
  return dispatch(receiveProperty(property))
}

const receiveProperty = property = ({
  type: RECEIVE_PROPERTY,
  property
})
