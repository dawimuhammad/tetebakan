'use strict'

let AppControllers = require('../Controllers/Controller.js')

class Views {
    static ViewShowApp() {
        console.log('                FAMILY 100\n')
        console.log('/create              -> Mulai permainan')
        console.log('/add <nama_player>   -> Memasukkan nama pemain')
        console.log('/showPlayer          -> Melihat daftar pemain')
        console.log('/start               -> Mulai permainan')
        console.log('/reset               -> Reset permainan ke kondisi awal')
    }

    static ViewShowPlayers(players) {
        console.log(players)
    }

}

module.exports = Views
