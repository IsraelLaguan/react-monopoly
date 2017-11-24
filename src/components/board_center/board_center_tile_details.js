import React, {Component} from 'react'
import Card from 'material-ui/Card';

export default class BoardCenterTileDetails extends Component {
  render() {
    // let improvements, id, name, owner, price, rent, sets
    console.log(this.props);
    // if (this.props.type === 'deed') {
    let { ownerName } = this.props
    let { improvements, id, name, owner, price, rent, sets } = this.props.property
    // } else if (this.props.type === 'action') {
      // console.log('action idk what to put yet lol');
    // }

    const nameStyles = {
      fontSize: '30px'
    }
    const cardStyle = {
      marginTop: '30px',
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      height: '300px'
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
    const detailStyles = {
      fontSize: '25px'
    }
    // <div>
    //   sets: {sets}
    // </div>
    const iconStyles = {
      width: '26px',
      height: '26px'
    }
    if (ownerName) {
      debugger
    }
    const ownerDetail = <div>
                owned by: {ownerName ? <img style={iconStyles} src={ownerName}/> : 'no one'}
              </div>
    const rentDetail = <div>
              rents {(rent ? rent : []).map((e, idx) => <div>{rentNames[idx]}: ${e}</div>)}
            </div>
    const priceDetail = <div>
                price: {price}
              </div>
    return (
      <Card style={cardStyle}>
        <div style={nameStyles}>{name}</div>
        <div style={detailStyles}>
          {price ? ownerDetail : ''}
          <div>
            {price ? priceDetail : ''}
          </div>
          {price ? rentDetail : ''}
          <div>
          </div>
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
