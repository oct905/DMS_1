const express = require('express');
const UserController = require('../controllers/userController');
const userRouter = require('./user');
const errorHandler = require('../middleware/errorHandler');
const educationRouter = require('./education');
const router = express.Router();

router.use(userRouter)
router.use(educationRouter)
router.use(errorHandler)

module.exports = router;