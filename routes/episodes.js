const express = require('express');
const episodeRouter = express.Router({mergeParams:true});
const episodesController = require('../controllers/episodes.controller');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/token');

episodeRouter.use(authMiddleware);

const episodeConstraints = [
    body('name').isString().withMessage('name should be a string'),
    body('url').isString().withMessage('url should be a string'),
    body('summary').isString().withMessage('summary should be a string'),
    body('officialSite').isString().withMessage('officialSite should be a string'),
    body('airtime').isInt().withMessage('airtime should be a number'),
    body('season').isInt().withMessage('season should be a number'),
    body('number').isInt().withMessage('episode number in season should be a number'),
    body('airtime').isInt().withMessage('airtime should be a number'),
    body('rating').isInt().withMessage('rating should be a valid json'),
]

episodeRouter.post('/', episodeConstraints[0], episodesController.addEpisode);
episodeRouter.put('/:id', episodeConstraints[0], episodesController.updateEpisode);
episodeRouter.delete('/:id', episodesController.deleteEpisode);
episodeRouter.get('/:id', episodesController.getEpisode);

module.exports = episodeRouter;