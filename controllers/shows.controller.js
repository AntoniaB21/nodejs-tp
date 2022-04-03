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


/**
 * Get a single show
 * 
 */
 exports.getShow = async function(req , res) {
    const response = await model.Shows.findOne({ where: { id: req.params.id} });
    res.json(response);
    // res.json({'message':'response'});
};

/**
 * Add a new show
 * 
 */
 exports.addShow = async function(req, res) {
    console.log(req.body);
    const response = await model.Shows.create(req.body);
    res.json({'message': response});
};