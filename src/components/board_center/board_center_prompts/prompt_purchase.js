import React from 'react'
import Button from 'material-ui/Button';

const prompStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '30px'
}

const PromptPurchase = props => {

  const purchasePrompt = <div style={prompStyle}>
    <div>
      Purchase?
    </div>
    <Button raised color='primary' onClick={() => props.purchase()}>
      Yes
    </Button>
    <Button raised color='primary' onClick={() => props.nextTurn()}>
      No
    </Button>
  </div>

  const cantPurchasePrompt = <div style={prompStyle}>
    <div>
      Not enough money
    </div>
      <Button raised color='primary' onClick={() => props.nextTurn()}>
      Next turn
    </Button>
  </div>
  console.log(props.chance);
  return (
    <div>
        {props.enoughMoney ? purchasePrompt : cantPurchasePrompt}
    </div>
  )
}

export default PromptPurchase
