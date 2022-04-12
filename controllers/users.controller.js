const { sequelize , DataTypes } = require('sequelize');
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");

const model = require('../models');

/**
 * Find Users
 *   
 */
 exports.getUsers = async function(req, res) {
    const respone = await model.User.findAll({
        attributes: ['id','firstName', 'lastName', 'email','createdAt','updatedAt'],
    });
    res.json(respone);
};

/**
 * Add a new user
 *   
 */
 exports.addUser = async function(req, res) {
    const hash = bcrypt.hashSync(req.body.password, 5); 
    console.log(hash);
    req.body.passwprd = hash;
    const response = await model.User.create({
        "fistName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "password": hash,
        "roles": 'USER',
        'createdAt': new Date(),
        'updatedAt': new Date(),
    });
    return res.status(201).json(response);
};

/**
 * Get a single user
 *   
 */
 exports.getUser = async function(req, res) {
    const response = await model.User.findOne({
        attributes: ['id','firstName', 'lastName', 'email','createdAt','updatedAt'],
        where: { id: req.params.id} });
    if (!response){
        return res.status(404).json({'message':`Show ${req.params.id} not found`});
    }
    return res.status(200).json(response);
};

/**
 * Get a single user
 *   
 */
 exports.updateUser = async function(req, res) {
    const response = await model.User.findOne({ where: { id: req.params.id} });

    if (!response) {
        return res.status(404).json({'message':`Show ${req.params.id} not found`});
    }
    
    const updatedObject = await model.User.update(req.body,{ where: { id: req.params.id} });

    const result = await model.User.findOne({ where: { id: req.params.id}});

    return res.status(200).json(result);
};


/**
 * Delete a single user
 *   
 */
 exports.deleteUser = async function(req, res) {
    const response = await model.User.findOne({ where: { id: req.params.id} });
    
    if (!response) {
        return res.status(404).json({'message':`User ${req.params.id} not found`});
    }

    await model.User.destroy({ where: { id: req.params.id} });

    return res.json({'message': `Successfully deleted user ${req.params.id}`});
};