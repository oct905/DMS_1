const express = require('express');
const { authentication } = require('../middleware/authentication');
const EducationController = require('../controllers/educationController');
const educationRouter = express.Router();

educationRouter.use(authentication)
educationRouter.post('/education', EducationController.create)
educationRouter.put('/education', EducationController.update)

module.exports = educationRouter;