const { sequelize , DataTypes } = require('sequelize');

const model = require('../models');
/**
 * Find shows
 * 
 */
 exports.getShows = async function(req, res) {
    const respone = await model.Shows.findAll();
    res.json(respone);
};


/**
 * Get a single show
 * 
 */
 exports.getShow = async function(req , res) {
    const response = await model.Shows.findOne({ where: { id: req.params.id} });
    if (!response){
        return res.status(404).json({'message':`Show ${req.params.id} not found`});
    }
    return res.status(200).json(response);
};

/**
 * Add a new show
 * 
 */
 exports.addShow = async function(req, res) {
    console.log(req.body);
    const response = await model.Shows.create(req.body);
    return res.status(201).json(response);
};

/**
 * Update a single show
 * 
 */
 exports.updateShow = async function(req, res) {
    const response = await model.Shows.findOne({ where: { id: req.params.id} });
    if (!response) {
        return res.status(404).json({'message':`Show ${req.params.id} not found`});
    }
    const updatedObject = await model.Shows.update(req.body,{ where: { id: req.params.id} });
    const result = await model.Shows.findOne({ where: { id: updatedObject}});
    return res.status(200).json(result);
};

/**
 * Delete a single show
 * 
 */
 exports.deleteShow = async function(req, res) {
    const response = await model.Shows.findOne({ where: { id: req.params.id} });
    
    if (!response) {
        return res.status(404).json({'message':`Show ${req.params.id} not found`});
    }

    await model.Shows.destroy({ where: { id: req.params.id} });

    return res.json({'message': `Successfully deleted show ${req.params.id}`});
};