export const RECEIVE_PLAYER = 'RECEIVE_PLAYER'

export const receivePlayer = player => async (dispatch) => {
  return dispatch(receivePlayerDispatch(player))
}

const receivePlayerDispatch = player => ({
  type: RECEIVE_PLAYER,
  player
})
