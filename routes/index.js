const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const signinController = require('../controllers/signin_controller');
const signupController = require('../controllers/signup_controller');


console.log("Router loaded");


router.get('/', homeController.home);

router.get('/signin', signinController.signin);
router.get('/signup', signupController.signup);

router.use('/users', require('./users'));

module.exports = router;