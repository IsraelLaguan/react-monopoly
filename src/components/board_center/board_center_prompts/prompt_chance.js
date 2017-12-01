import React from 'react'
import Button from 'material-ui/Button'

const promptStyle = {

}

const PromptChance = props => (
  <div>
    <h1>
      Chance
    </h1>
    <h2>
      {props.chance.name}
    </h2>
    { props.showPurchasePrompt ?
      null
      :
      <Button color='primary' raised onClick={() => props.nextTurn()}>
        Ok
      </Button>
    }
  </div>
)

export default PromptChance
