//I know this is taboo but it's just so helpful!!
Set.prototype.includesAll = function(setOrArray) {
  const thisSet = new Set(this)
  const findSet = new Set(setOrArray)
  for (let el of findSet) {
    if (!thisSet.has(el)) {
      return false
    }
  }
  return true
}

Set.prototype.filter = function(cb) {
  const newSet = new Set
  for (let el of this) {
    if (cb(el)) {
      newSet.add(el)
    }
  }
  return newSet
}

Array.prototype.includesAll = function(setOrArray) {
  const thisSet = new Set(this)
  const findSet = new Set(setOrArray)
  for (let el of findSet) {
    if (!thisSet.has(el)) {
      return false
    }
  }
  return true
}

// Object.prototype.filter = function(cb) {
//   const newObj = {}
//   for (let el in this) {
//     if (cb(el)) {
//       newObj[el] = this[el]
//     }
//   }
//   return newObj
// }

Object.defineProperty(Object.prototype, 'size', {
  get: function() {
    let counter = 0
    console.log(this)
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
