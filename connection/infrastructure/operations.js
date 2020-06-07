const cruds = require('./crud/index')

class Operations {
  // entity = check my entity called, example: 'user' 
  constructor(entity) {
    this.entity = entity
  }

  list() {
    return cruds[this.entity].list()
  }

  search(userid) {
    return cruds[this.entity].search(userid)
  }

  add(item) {
    return cruds[this.entity].add(item)
  }

  check(item) {
    return cruds[this.entity].check(item)
  }

  delete(userid) {
    return cruds[this.entity].delete(userid)
  }
}

module.exports = Operations
