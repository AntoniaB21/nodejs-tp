const { sequelize , DataTypes } = require('sequelize');
const model = require('../models');
const { validationResult } = require('express-validator');

/**
 * Find episodes
 * 
 */
exports.getEpisodes = async function(req, res) {
    const respone = await model.Episode.findAll();
    res.status(200).json(respone);
};

