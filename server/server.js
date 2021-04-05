const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');
const polls = require('./polls');

const app = express();

app.use(express.static('public'))
app.use(cors())

app.get('/polls', (req, res) => {
  res.send(polls.get(req.token))
})

app.post('/polls', bodyParser.json(), (req, res) => {
  const { name, email } = req.body

  if (name && email) {
    res.send(polls.add(req.token, req.body))
  } else {
    res.status(403).send({
      error: 'Please provide both a name and an email address'
    })
  }
})

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})

module.exports = app;