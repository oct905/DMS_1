const express = require('express');
const UserController = require('../controllers/userController');
const { authentication } = require('../middleware/authentication');
const userRouter = express.Router();

userRouter.post('/register', UserController.register)
userRouter.post('/login', UserController.login)

userRouter.use(authentication)
userRouter.get('/user', UserController.get)
userRouter.get('/users', UserController.getAll)
userRouter.delete('/user/:id', UserController.delete)
userRouter.put('/user/profile', UserController.updateProfile)

module.exports = userRouter;