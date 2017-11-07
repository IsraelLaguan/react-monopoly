export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY'

export const receiveProperty = property => async (dispatch) => {
  return dispatch(receivePropertyDispatch(property))
}

const receivePropertyDispatch = property => ({
  type: RECEIVE_PROPERTY,
  property
})
