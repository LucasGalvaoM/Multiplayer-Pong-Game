const express = require('express');
const router = express.Router();
const gameController = require('../controllers/game');

router.get('/:id', gameController.getGame);

module.exports = router;