export const RECEIVE_CHANCE = 'RECEIVE_CHANCE'

export const receiveChance = chance => async (dispatch) => {
  return dispatch(receiveChanceDispatch(chance))
}

const receiveChanceDispatch = chance => ({
  type: RECEIVE_CHANCE,
  chance
})
