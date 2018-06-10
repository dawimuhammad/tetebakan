'use strict'

const AppControllers = require('./Controllers/Controllers')
// const HospitalController = require('./controllers/controller')

const command = process.argv

if (command[2] === undefined || command[2] === 'start') {
    AppControllers.ViewShowApp
}
