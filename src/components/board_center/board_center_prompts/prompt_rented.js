import React from 'react'

const PromptRented = props => (
  <div>
    You just got rekt. This is owned and you have been charged rent.
    <button onClick={() => props.nextTurn()}>
      Ok :(
    </button>
  </div>
)

export default PromptRented
