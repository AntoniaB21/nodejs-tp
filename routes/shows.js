const express = require('express');
const showsRouter = express.Router();
const showsController = require('../controllers/shows.controller');

// showsRouter.get('/', (req, res) => {
//     res.json({'message':'Hello World!'})
// })

showsRouter.get('/', showsController.getShows);

module.exports = showsRouter;