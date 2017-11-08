const props = [
  ['start', 'action'],
  ['Mediterranean Ave', 'deed', 60, [], [4, 10, 30, 90, 160, 250]],
  ['Community Chest', 'action'],
  ['Baltic Ave', 'deed', 60, [], [4, 20, 60, 180, 320, 450]],
  ['Income Tax', 'action'],
  ['Reading Railroad', 'railroad', 200, [], [25, 50, 100, 200]],
  ['Oriental Ave', 'deed', 100, [], [6, 30, 90, 270, 400]],
  ['Vermont Ave', 'deed', 100, [], [6, 30, 90, 270, 400]],
  ['Connecticut Ave', 'deed', 120, [], [8, 40, 100, 300, 450]],
  ['Go To Jail', 'action'],
  ['St. Charles Place', 'deed', 140, [], [10, 50, 150, 450, 625, 750]]
]


const deed = (data, id) => {
  const [name, type, price, sets, rent] = data
  const [owner, improvements] = [false, 0]
  return {id, name, type, price, sets, rent, owner, improvements}
}

const action = (data, id) => {
  const [name, type] = data
  return {id, name, type}
}

const buildProperties = () => {
  const properties = {}
  props.forEach((data, idx) => {
    if (data[1] === 'deed') {
      properties[idx] = deed(data, idx)
    } else if (data[1] === 'action') {
      properties[idx] = action(data, idx)
    }
  })
  return properties
}

const Properties = buildProperties()
export default Properties
//
// const Properties = {
//   0: {
//     id: 0,
//     name: 'start',
//     type: null,
//     price: 0,
//     sets: [],
//     owner: false,
//     rent: {},
//     houses: 0,
//     hotels: 0
//   },
//   1: {
//     id: 1,
//     name: 'ParkPlace2',
//     type: 'chance',
//     price: 100,
//     sets: [2],
//     owner: null,
//     rent: {
//       0: 100,
//       1: 300,
//       2: 400
//     },
//     houses: 0,
//     hotels: 0
//   },
//   2: {
//     id: 2,
//     name: 'ParkPlace3',
//     type: 'deed',
//     price: 100,
//     sets: [2],
//     owner: null,
//     rent: {
//       0: 100,
//       1: 300,
//       2: 400
//     },
//     houses: 0,
//     hotels: 0
//   },
//   3: {
//     id: 3,
//     name: 'ParkPlace4',
//     type: 'deed',
//     price: 100,
//     sets: [2],
//     owner: null,
//     rent: {
//       0: 100,
//       1: 300,
//       2: 400
//     },
//     houses: 0,
//     hotels: 0
//   },
//   4: {
//     id: 4,
//     name: 'ParkPlace5',
//     type: 'deed',
//     price: 100,
//     sets: [2],
//     owner: null,
//     rent: {
//       0: 100,
//       1: 300,
//       2: 400
//     },
//     houses: 0,
//     hotels: 0
//   },
//   5: {
//     id: 5,
//     name: 'ParkPlace6',
//     type: 'deed',
//     price: 100,
//     sets: [2],
//     owner: null,
//     rent: {
//       0: 100,
//       1: 300,
//       2: 400
//     },
//     houses: 0,
//     hotels: 0
//   },
//   6: {
//     id: 6,
//     name: 'ParkPlace7',
//     type: 'deed',
//     price: 100,
//     sets: [2],
//     owner: null,
//     rent: {
//       0: 100,
//       1: 300,
//       2: 400
//     },
//     houses: 0,
//     hotels: 0
//   }
// }
