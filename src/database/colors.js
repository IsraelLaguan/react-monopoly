const colorTile = {
  0: 4,
  1: 0,
  2: 2,
  3: 0,
  4: 4,
  5: 3,
  6: 1,
  7: 4,
  8: 1, //vermont
  9: 1,
  // 8: /Connecticut
  10: 4,
  11: 5,
  12: 4,
  13: 5,
  14: 5, //railroad
  15: 3,
  16: 6,
  17: 4,
  18: 6,
  19: 6,
  20: 4,//free parking
  21: 7,
  22: 4,
  23: 7,
  24: 7,
  25: 3,
  26: 2,
  27: 2,
  28: 4,
  29: 2,
  30: 4, //go to jail
  31: 8,
  32: 8,
  33: 4,
  34: 8,
  35: 3,
  36: 4,
  37: 9,
  38: 4,
  39: 9
}

const colorId = {
  0: '#8b4513',
  1: '#c2e5fc', //light blue
  2: '#ffff00', //yellow
  3: 'black',
  4: 'transparent',
  5: '#ff00ff', //magenta
  6: '#ff8000', //orange
  7: '#ff0000', //red,
  8: '#338033', //green,
  9: '#2020cc' //blue
}

const Color = {}

for (let key in colorTile) {
  Color[key] = colorId[colorTile[key]]
}

export default Color
