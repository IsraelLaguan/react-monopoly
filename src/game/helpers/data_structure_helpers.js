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

Object.prototype.filter = function(cb) {
  const newObj = {}
  for (let el in this) {
    if (cb(el)) {
      newObj[el] = this[el]
    }
  }
  return newObj
}

export { Set, Array, Object }
