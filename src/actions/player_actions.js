export const RECEIVE_PLAYER = 'RECEIVE_PLAYER'

export const receivePlayer = player => async (dispatch) => (
  (() => {
    dispatch(receivePlayerDispatch(player))
  })()
)

const receivePlayerDispatch = player => ({
  type: RECEIVE_PLAYER,
  player
})
