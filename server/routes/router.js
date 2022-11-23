const auth = require('../auth')
const express = require('express')
const UserController = require('../controllers/user-controller')
const TriviaQuestionController = require('../controllers/triviaQuestion-controller')
const LocationController = require('../controllers/location-controller')
const router = express.Router()

router.post('/register', UserController.registerUser)
router.get('/loggedIn', UserController.getLoggedIn)
router.post('/login', UserController.login)
router.get('/logout', UserController.logout)

router.post('/createTriviaQuestion', TriviaQuestionController.createTriviaQuestion)

router.post('/createLocation', LocationController.createLocation)

module.exports = router