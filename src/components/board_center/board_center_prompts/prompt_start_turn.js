import React from 'react'

const PromptStartTurn = props => (
  <button onClick={() => props.startTurn()}>
    Start turn
  </button>
)

export default PromptStartTurn
