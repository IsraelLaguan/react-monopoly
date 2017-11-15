import React from 'react'
import Button from 'material-ui/Button';

const PromptPurchase = props => (
  <div>
    Purchase?
    <Button raised color='primary' onClick={() => props.purchase()}>
      Yes
    </Button>
    <Button raised color='primary' onClick={() => props.nextTurn()}>
      No
    </Button>
  </div>
)

export default PromptPurchase
