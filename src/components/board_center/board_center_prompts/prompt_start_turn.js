import React from 'react'
import Button from 'material-ui/Button';

const PromptStartTurn = props => (
  <Button raised onClick={() => props.startTurn()}>
    Start turn
  </Button>
)

export default PromptStartTurn
