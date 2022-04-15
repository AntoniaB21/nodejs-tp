const express = require('express');
const showsRouter = express.Router({mergeParams:true});
const showsController = require('../controllers/shows.controller');
const episodesController = require('../controllers/episodes.controller');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/token');
const checkRightsAdmin = require('../middlewares/checkRights');

showsRouter.use(authMiddleware);

const showConstraints = [
            body('name').isString().withMessage('name should be a string'),
            body('url').isString().withMessage('url should be a string'),
            body('summary').isString().withMessage('summary should be a string'),
            body('officialSite').isString().withMessage('officialSite should be a string'),
            body('premiered').isString().withMessage('premiered should be a string date'),
            body('ended').isString().withMessage('premiered should be a string date')
]

showsRouter.get('/', showsController.getShows);
showsRouter.post('/', checkRightsAdmin, showConstraints[0], showsController.addShow);
showsRouter.get('/:id', showsController.getShow);
showsRouter.put('/:id', checkRightsAdmin, showConstraints[0], showsController.updateShow);
showsRouter.delete('/:id', checkRightsAdmin, showsController.deleteShow);

// Shows and Episodes routes
showsRouter.get('/:showId/episodes', episodesController.getEpisodes);

module.exports = showsRouter;