const express = require('express');
const { Show } = require('../config/sequelize');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.json({'message':'Hello World!'})
})

homeRouter.get('/shows', async (req, res) => {
    const shows = await Show.findAll();
    res.json(shows);
})

module.exports = homeRouter;