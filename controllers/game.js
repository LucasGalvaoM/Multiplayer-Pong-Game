const rooms = require('../server');

module.exports = {
    getGame(req, res) {
        // check if the room id is a valid room
        // if so, load the game
        // if not, redirect the user back to the menu
        if(rooms[req.params.id]) {
            res.render('game.ejs');
        } else res.redirect('/');
    }
}