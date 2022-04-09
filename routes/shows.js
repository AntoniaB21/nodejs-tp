const express = require('express');
const showsRouter = express.Router();
const showsController = require('../controllers/shows.controller');
const { body } = require('express-validator');

const showConstraints = [
            body('name').isString().withMessage('name should be a string'),
            body('url').isString().withMessage('url should be a string'),
            body('summary').isString().withMessage('summary should be a string'),
            body('officialSite').isString().withMessage('officialSite should be a string'),
            body('premiered').isString().withMessage('premiered should be a string date'),
            body('ended').isString().withMessage('premiered should be a string date')
]

showsRouter.get('/', showsController.getShows);
showsRouter.post('/', showConstraints[0], showsController.addShow);
showsRouter.get('/:id', showsController.getShow);
showsRouter.put('/:id', showConstraints[0], showsController.updateShow);
showsRouter.delete('/:id', showsController.deleteShow);
// showsRouter.get('/:id/episodes', showsController.getShowEpisodes);

module.exports = showsRouter;