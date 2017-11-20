const Chance = {
  0: {
    name: 'Advance to Go',
    position: 0 //
  },
  1: {
    name: 'Advance to Illinois Ave.',
    position: null
  },
  2: {
    name: 'Advance to St. Charles Place',
    position: null
  },
  3: {
    name:'Advance to nearest Utility',
    position: null
  },
  4: {
    name: 'Advance to neareset Railroad',
    position: null
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
    name: 'Make general repairs on all properties'
  },
  9: {
    name: 'Pay poor tax of $15',
    cash: -15
  },
  10: {
    name: 'Take a trip to Reading Railroad',
    position: null
  },
  11: {
    name: 'Take a walk on Boardwalk',
    position: null
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
