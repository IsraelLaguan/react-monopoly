//I know this is taboo but it's just so helpful!!
// Set.prototype.includesAll = function(setOrArray) {
//   const thisSet = new Set(this)
//   const findSet = new Set(setOrArray)
//   for (let el of findSet) {
//     if (!thisSet.has(el)) {
//       return false
//     }
//   }
//   return true
// }
Object.defineProperty(Array.prototype, 'shuffle', {
  value: function() {
    const nums = new Set()
    while (nums.size < this.length) {
      nums.add(Math.floor(Math.random() * this.length))
    }
    return [...nums].map(idx => this[idx])
  },
  writeable: false
})

Object.defineProperty(Set.prototype, 'includesAll', {
  value: function(array) {
    const thisSet = new Set(this)
    const findSet = new Set(array)
    for (let el of findSet) {
      if (!thisSet.has(el)) {
        return false
      }
    }
    return true
  },
  writeable: false
})

// Set.prototype.filter = function(cb) {
//   const newSet = new Set
//   for (let el of this) {
//     if (cb(el)) {
//       newSet.add(el)
//     }
//   }
//   return newSet
// }

Object.defineProperty(Set.prototype, 'filter', {
  value: function(cb) {
    const newSet = new Set
    for (let el of this) {
      if (cb(el)) {
        newSet.add(el)
      }
    }
    return newSet
  },
  writeable: false
})
// Array.prototype.includesAll = function(setOrArray) {
//   const thisSet = new Set(this)
//   const findSet = new Set(setOrArray)
//   for (let el of findSet) {
//     if (!thisSet.has(el)) {
//       return false
//     }
//   }
//   return true
// }

Object.defineProperty(Array.prototype, 'includesAll', {
  value: function(array) {
    const thisSet = new Set(this)
    const findSet = new Set(array)
    for (let el of findSet) {
      if (!thisSet.has(el)) {
        return false
      }
    }
    return true
  },
  writeable: false
})

// Object.prototype.filter = function(cb) {
  // const newObj = {}
  // for (let el in this) {
  //   if (cb(el)) {
  //     newObj[el] = this[el]
  //   }
  // }
  // return newObj
// }

Object.defineProperty(Object.prototype, 'filter', {
  value: function(cb) {
    const newObj = {}
    for (let el in this) {
      if (cb(el)) {
        newObj[el] = this[el]
      }
    }
    return newObj
  },
  writeable: false
})

Object.defineProperty(Object.prototype, 'size', {
  get: function() {
    let counter = 0
    for (let i in this) {
      counter += 1
    }
    return counter
  },
  writeable: false
})

// Object.prototype.size = function() {
//   return Object.entries(this).length
// }

export { Set, Array, Object }
