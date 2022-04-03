const express = require('express');
const showsRouter = express.Router();
const showsController = require('../controllers/shows.controller');

showsRouter.get('/', showsController.getShows);
showsRouter.get('/:id', showsController.getShow);
showsRouter.post('/', showsController.addShow);
// showsRouter.get('/:id/episodes', showsController.getShowEpisodes);

module.exports = showsRouter;