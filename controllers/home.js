const rooms = require('../server');

function getRoomId() {
    let res = '';
    const randomizer = '1234567890abcdefghijklmnopqrstuvwxyz'
    for(let i = 0; i < 9; i++) {
        res += randomizer[Math.floor(Math.random() * randomizer.length)];
    }
    return res;
}

module.exports = {
    getHome(req, res) {
        res.render('index.ejs');
    },
    createRoom(req, res) {
        const id = getRoomId();
        rooms[id] = [];
        res.redirect(`/game/${id}`);
    }
}