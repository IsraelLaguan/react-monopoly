import React from 'react'
import Button from 'material-ui/Button';
const containerStyle = {
  display: 'flex',
  flexDirection: 'column'
}
const textStyle = {
  fontSize: '30px'
}
const PromptRented = props => (
  <div style={containerStyle}>
    <p style={textStyle}>
      You just got rekt. This is owned and you have been charged rent.
    </p>
    <Button raised onClick={() => props.nextTurn()}>
      Ok :(
    </Button>
  </div>
)

export default PromptRented
