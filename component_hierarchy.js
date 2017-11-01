const App = {
  board: 'board',
  cards: 'cards',
  players: 'players',
  dice: 'dice',
  money: 'money',
  tile: 'tile: very little info',
  initiate: 'initiate'
}


const classes = {
  PlayerLogic: null,
  GameLogic: null,
}

const data = {
  properties: null,
  icons: null
}

"board holds tiles, which has access to pass players around"
"each tile has the option to have a player on it"

"Players: A component. "
"{cash, properties: new Set(str), character }"
"contain cash and a new Set of strings on what they currently own"


'database:'
"Properties: Have a global new Map, keys are strings, value is an object"
  "{price, owner, housing: [](str), rent}"
"PlayerTypes: new Map: name:{image}"
