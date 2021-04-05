const clone = require('clone')
//const config = require('./config')

const db = {}

const defaultData = {
  polls: []
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, poll) => {
  if (!poll.id) {
    poll.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(poll)

  return poll
}

module.exports = {
  get,
  add
}
