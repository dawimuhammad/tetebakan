'use strict'

let AppViews = require('../Views/View.js')
let AppModel = require('../Models/Model.js')

class Controller {
    static startApp() {
        AppViews.ViewShowApp()
    }

    static getPlayers() {
        let players = AppModel.ModelReadPlayers()
        AppViews.ViewShowPlayers(players)
    }

    static addPlayer(playerName) {
        AppModel.ModelWritePlayers(playerName)
    }




}

module.exports = Controller
