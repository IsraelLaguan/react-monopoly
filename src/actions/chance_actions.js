export const GET_CHANCE = 'GET_CHANCE'

export const getChance = chance => async (dispatch) => {
  return dispatch(getChanceDispatch(chance))
}

const getChanceDispatch = chance => ({
  type: GET_CHANCE,
  chance
})
