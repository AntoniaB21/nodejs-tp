const express = require('express');
const episodeRouter = express.Router();
const episodesController = require('../controllers/episodes.controller');
const { body } = require('express-validator');

episodeRouter.get('/', episodesController.getEpisodes);

module.exports = episodeRouter;
