//I know this is taboo but it's just so helpful!!

Object.defineProperty(Array.prototype, 'shuffle', {
  value: function() {
    const a = [...this]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
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
      if (cb(this[el])) {
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

const truthy = (element) => element !== undefined && element !== null && element !== false

// Object.prototype.size = function() {
//   return Object.entries(this).length
// }

export { Set, Array, Object, truthy }
