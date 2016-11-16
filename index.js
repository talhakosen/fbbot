'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot')
})

// for Facebook verification
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === 'EAAPxIQa4rxEBAKYXQw5VbzZCMW4lv5dj8whWfP8Bi74ub4vxiOnVQafYk4g0HPwmoTAH535DhomUGjHf5Vkcks2oxo4CeoIbdHIUjMMZAJ6zD9KcsZAFgr8jVUFwyhx9U7ZACJXLtsQ6dayZBdhWClxz5ZAVohkrcqSDZAaUgg53QZDZD') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})