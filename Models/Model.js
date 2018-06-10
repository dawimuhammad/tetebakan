'use strict'

const fs = require('fs')

class Player {
    constructor(idNewPlayer, playerName) {
        this.id = idNewPlayer,
        this.name = playerName,
        this.score = 0,
        this.isHighest = false
    }
}

class Model {
    static ModelReadPlayers() {
        const players = fs.readFileSync('players.json', 'utf8')
        return (JSON.parse(players))
    }

    static ModelWritePlayers(playerName) {
        let players = Model.ModelReadPlayers()
        let idNewPlayer = players[players.length-1].id + 1
        let newPlayer = new Player(idNewPlayer, playerName)
        players.push(newPlayer)
        fs.writeFileSync('players.json', JSON.stringify(players))
    }
}

module.exports = Model
