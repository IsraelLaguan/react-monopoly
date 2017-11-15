import React, {Component} from 'react'
import Card from 'material-ui/Card';

export default class BoardCenterTileDetails extends Component {
  render() {
    // let improvements, id, name, owner, price, rent, sets
    console.log(this.props);
    // if (this.props.type === 'deed') {
    let { improvements, id, name, owner, price, rent, sets } = this.props.property
    // } else if (this.props.type === 'action') {
      // console.log('action idk what to put yet lol');
    // }

    const nameStyles = {
      fontSize: '30px'
    }
    const cardStyle = {
      display: 'flex',
      flexDirection: 'column'
    }
    let rentNames
    if (name.includes('Railroad')) {
      rentNames = {
        0: '1 railroad',
        1: '2 railroads',
        2: '3 railroad',
        3: '4 railroads'
      }
    } else {
      rentNames = {
        0: 'no improvements',
        1: '1 house',
        2: '2 houses',
        3: '3 houses',
        4: '4 houses',
        5: '1 hotel'
      }
    }
    return (
      <Card style={cardStyle}>
        <div style={nameStyles}>{name}</div>
        <div>
          owned by: {owner ? owner : 'no one'}
        </div>
        <div>
          price: ${price}
        </div>
        <div style={cardStyle}>
          rents {(rent ? rent : []).map((e, idx) => <div>{rentNames[idx]}: ${e}</div>)}
        </div>
        <div>
          sets: {sets}
        </div>
      </Card>
    )
  }
}
// id
// :
// 6
// improvements
// :
// 0
// name
// :
// "Oriental Ave"
// owner
// :
// false
// price
// :
// 100
// rent
// :
// (5) [6, 30, 90, 270, 400]
// sets
// :
// []
