const { sequelize , DataTypes } = require('sequelize');
const model = require('../models');
const { validationResult } = require('express-validator');

/**
 * Find episodes
 * 
 */
exports.getEpisodes = async function(req, res) {
    const respone = await model.Episode.findAll({
        where:{
            showId:req.params.showId
        }
    });
    res.status(200).json(respone);
};

exports.getEpisode = async function(req, res) {
    const response = await model.Episode.findOne({ where: { id: req.params.id} });
    if (!response){
        return res.status(404).json({'message':`Episode ${req.params.id} not found`});
    }
    return res.status(200).json(response);
};

exports.addEpisode = async function (req, res) {
    const show = await model.Shows.findOne({ where: { id: req.body.showId} });

    if (!show){
        return res.status(404).json({'message':`You can't add episode to the show ${req.body.showId} because it is not found`});
    }
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const response = await model.Episode.create(req.body);
    return res.status(201).json(response);
};

exports.updateEpisode = async function (req, res) {
    const response = await model.Episode.findOne({ where: { id: req.params.id} });

    if (!response) {
        return res.status(404).json({'message':`Episode ${req.params.id} not found`});
    }

    if (req.body.showId) {
        const show = await model.Shows.findOne({ where: { id: req.body.showId} });
        
        if (!show){
            return res.status(404).json({'message':`You can't add episode to the show ${req.body.showId} because it is not found`});
        }
    }

    const updatedObject = await model.Episode.update(req.body,{ where: { id: req.params.id} });

    const result = await model.Episode.findOne({ where: { id: req.params.id}});
    return res.status(200).json(result);
};

exports.deleteEpisode = async function (req, res) {
    const response = await model.Shows.findOne({ where: { id: req.params.id} });
    
    if (!response) {
        return res.status(404).json({'message':`Show ${req.params.id} not found`});
    }

    await model.Shows.destroy({ where: { id: req.params.id} });

    return res.status(200).json({'message': `Successfully deleted show ${req.params.id}`});
};