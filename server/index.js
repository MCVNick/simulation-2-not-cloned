require('dotenv').config()
const express = require('express')
const { json } = require('body-parser')
const massive = require('massive')

const { CONNECTION_STRING, SERVER_PORT } = process.env
const ctrl = require('./controller')

const app = express()
app.use(json())
app.use(express.static('build'))

massive(CONNECTION_STRING)
    .then(db => app.set('db', db))



app.get('/api/houses', ctrl.getHouses)
app.post('/api/add/house', ctrl.addHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)


const port = SERVER_PORT || 3001
app.listen(port, () => console.log('Listening on port', port))