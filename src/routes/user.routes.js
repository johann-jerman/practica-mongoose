const express = require('express');
const routes = express.Router();

const userController = require('../controller/userController')
const authController = require('../controller/authController')

routes.get('/findAll', userController.findAll);

routes.get('/:id', userController.findOne);

routes.post('/create', userController.createUser);

routes.post('/update/:id', userController.updateUser);

routes.post('/delete/:id', userController.deleteUser);

routes.post('/login', authController.login);

routes.post('/auth', authController.auth);




module.exports = routes