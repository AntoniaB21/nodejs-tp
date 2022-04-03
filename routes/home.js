const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.json({'message':'Hello World!'})
})

homeRouter.get('/shows', (req, res) => {
    res.json({'message':'Return shows'})
})

module.exports = homeRouter;