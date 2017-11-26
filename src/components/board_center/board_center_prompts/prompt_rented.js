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
    <div style={textStyle}>
      R E K T. You have been charged rent.
    </div>
    <div>
      <Button color='primary' raised onClick={() => props.nextTurn()}>
        Ok :(
      </Button>
    </div>
  </div>
)

export default PromptRented
