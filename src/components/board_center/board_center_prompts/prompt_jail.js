import React from 'react'

const PromptJail = props => (
  <div>
    <h3>{`In jail. ${props.turnsLost} more turns in jail`}</h3>
    <button onClick={() => props.nextTurn()}>
      {`Ok :(`}
    </button>
  </div>
)

export default PromptJail
