const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

const postsController = require('../controllers/posts_controller');
const { MongoBatchReExecutionError } = require('mongodb');



router.get('/profile', usersController.profile);

router.get('/posts', postsController.posts);

router.get('/signup', usersController.signup);
router.get('/signin', usersController.signin);

router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession);

//for any further routes, access from here

// router.use('/routerName', require('./routerFile'))



module.exports = router;