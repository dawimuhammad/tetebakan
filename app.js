'use strict'

const AppControllers = require('./Controllers/Controller')
// const HospitalController = require('./controllers/controller')

const command = process.argv

// Command List
const isCommandCreateGame = command[2] === '/create'
const isCommandAddPlayer = command[2] === '/add'
const isCommandShowPlayer = command[2] === '/showPlayer'
const isCommandStartGame = command[2] === '/start'
const isCommandResetGame = command[2] === '/reset'

if (command[2] === undefined || command[2] === 'start') {
    AppControllers.startApp()
} else if (isCommandCreateGame) {
    console.log('start');
}else if (isCommandAddPlayer) {
    console.log('add player');
} else if (isCommandShowPlayer) {
    console.log('show player');
} else if (isCommandStartGame) {
    console.log('start game');
} else if (isCommandResetGame) {
    console.log('reset game');
}
