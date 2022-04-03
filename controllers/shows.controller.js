const { sequelize , DataTypes } = require('sequelize');

const model = require('../models');
/**
 * Find shows
 * 
 */
 exports.getShows = async function(req, res) {
    const respone = await model.Shows.findAll();
    res.json({'message': respone});
    // res.json({'message':'response'});
};