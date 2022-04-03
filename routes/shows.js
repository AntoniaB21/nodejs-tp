const express = require('express');
const showsRouter = express.Router();
const showsController = require('../controllers/shows.controller');

showsRouter.get('/', showsController.getShows);
showsRouter.post('/', showsController.addShow);
showsRouter.get('/:id', showsController.getShow);
showsRouter.put('/:id', showsController.updateShow);
showsRouter.delete('/:id', showsController.deleteShow);
// showsRouter.get('/:id/episodes', showsController.getShowEpisodes);

module.exports = showsRouter;