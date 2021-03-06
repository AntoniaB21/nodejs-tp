const express = require('express');
const usersRouter = express.Router({mergeParams:true});
const usersController = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/token');

usersRouter.use(authMiddleware);

usersRouter.get('/', usersController.getUsers);
usersRouter.post('/', usersController.addUser);
usersRouter.get('/:id', usersController.getUser);
usersRouter.put('/:id', usersController.updateUser);
usersRouter.delete('/:id', usersController.deleteUser);

module.exports = usersRouter;