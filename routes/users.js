const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

const postsController = require('../controllers/posts_controller');



router.get('/profile', usersController.profile);

router.get('/posts', postsController.posts);

router.get('/signup', usersController.signup);
router.get('/signin', usersController.signin);

router.post('/create', usersController.create);

//for any further routes, access from here

// router.use('/routerName', require('./routerFile'))



module.exports = router;