import React from 'react'
import Button from 'material-ui/Button';

const PromptStartTurn = props => (
  <Button color='primary' raised onClick={() => props.startTurn()}>
    Start turn
  </Button>
)

export default PromptStartTurn
