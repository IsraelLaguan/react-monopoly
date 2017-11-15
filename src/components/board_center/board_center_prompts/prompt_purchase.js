import React from 'react'

const PromptPurchase = props => (
  <div>
    Purchase?
    <button onClick={() => props.purchase()}>
      Yes
    </button>
    <button onClick={() => props.nextTurn()}>
      No
    </button>
  </div>
)

export default PromptPurchase
