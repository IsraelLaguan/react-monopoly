const props = [ //id is line number of file minus 2
  ['GO, collect $200', 'action'], //bottom right
  ['Mediterranean Ave', 'deed', 60, [], [4, 10, 30, 90, 160, 250]],
  ['Community Chest', 'action'],
  ['Baltic Ave', 'deed', 60, [], [4, 20, 60, 180, 320, 450]],
  ['Income Tax', 'action'],
  ['Reading Railroad', 'deed', 200, [], [25, 50, 100, 200]],
  ['Oriental Ave', 'deed', 100, [], [6, 30, 90, 270, 400]],
  ['Chance', 'action'],
  ['Vermont Ave', 'deed', 100, [], [6, 30, 90, 270, 400]],
  ['Connecticut Ave', 'deed', 120, [], [8, 40, 100, 300, 450]],
  ['Jail', 'action'], //bottom left
  ['St. Charles Place', 'deed', 140, [], [10, 50, 150, 450, 625, 750]],
  ['Electric Company', 'deed', 150, [], [150]],
  ['States Ave', 'deed', 140, [], [10, 50, 150, 450, 625, 750]],
  ['Virginia Ave', 'deed', 160, [], [12, 60, 180, 500, 700, 900]],
  ['Pennsylvania Railroad', 'deed', 200, [], [25,50, 100, 200]],
  ['St. James Pl', 'deed', 180, [], [14, 70, 200, 550, 750]],
  ['Community Chest', 'action'],
  ['Tennessee Ave', 'deed', 180, [], [14, 70, 200, 550, 750]],
  ['New York Ave', 'deed', 200, [], [16, 80, 220, 600, 800, 1000]],
  ['Free Parking', 'action'],//top left
  ['Kentucky Ave', 'deed', 220, [], [18, 90, 250, 700, 875]],
  ['Chance', 'action'],
  ['Indiana Ave', 'deed', 220, [], [18, 90, 250, 700, 875, 1050]],
  ['Illinois Ave', 'deed', 240, [], [20, 100, 300, 750, 925, 1100]],
  ['B. & O. Railroad', 'deed', 200, [], [25, 50, 100, 200]],
  ['Atlantic Ave', 'deed', 260, [], [22, 110, 330, 800, 975, 1150]],
  ['Ventnor Ave', 'deed', 260, [], [22, 110, 330, 800, 975]],
  ['Water Works', 'deed', 150, [], []],
  ['Marvin Gardens', 'deed', 280, [], []],
  ['Go To Jail', 'action'], //top right
  ['Pacific Ave', 'deed', 300, [], [26, 130, 390, 900, 1100, 1275]],
  ['North Carolina Ave', 'deed', 300, [], [26, 130, 390, 900, 1100, 1275]],
  ['Community Chest', 'action'],
  ['Pennsylvania Ave', 'deed', 300, [], [28, 150, 450, 1000, 1200, 1400]],
  ['Short Line Railroad', 'deed', 200, [], [25, 50, 100, 200]],
  ['Chance', 'action'],
  ['Park Place', 'deed', 350, [], [35, 175, 500, 1100, 1300, 1500]],
  ['Luxury Tax', 'action'],
  ['Boardwalk', 'deed', 400, [], [50, 200, 600, 1400, 1700, 2000]]
]


const deed = (data, id) => {
  const [name, type, price, sets, rent] = data
  const [owner, improvements] = [false, 0]
  return {id, name, type, price, sets, rent, owner, improvements}
}

const action = (data, id) => {
  const [name, type] = data
  return {id, name, type, price: 0}
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
export {props, action, buildProperties}
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
