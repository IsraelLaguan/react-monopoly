import React from 'react'
import Button from 'material-ui/Button';

const prompStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '30px'
}

const PromptPurchase = props => (
  <div style={prompStyle}>
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
