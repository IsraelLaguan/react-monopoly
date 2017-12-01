const Chance = {
  0: {
    name: 'Advance to Go',
    position: 0, //
    cash: 200
  },
  1: {
    name: 'Advance to Illinois Ave.',
    position: 24
  },
  2: {
    name: 'Advance to St. Charles Place',
    position: 11
  },
  3: {
    name:'Advance to nearest Utility',
    position: 30
  },
  4: {
    name: 'Advance to neareset Railroad',
    position: 25
  },
  5: {
    name: 'Bank pays you dividend of $50',
    cash: 50
  },
  6: {
    name: 'Get out of Jail Free',
    position: null
  },
  7: {
    name: 'Go to Jail',
    position: null,
    canPassGo: false
  },
  8: {
    name: 'Make general repairs on all properties',
    cash: -20
  },
  9: {
    name: 'Pay poor tax of $15',
    cash: -15
  },
  10: {
    name: 'Take a trip to Reading Railroad',
    position: 5
  },
  11: {
    name: 'Take a walk on Boardwalk',
    position: 39
  },
  12: {
    name: 'You have been elected Chairman of the Board',
    cash: -50
  },
  13: {
    name: 'Your building and loans mature. Collect $150',
    cash: 150
  }
}

export default Chance
