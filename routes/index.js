const express = require('express')
const router = express.Router()

const posts_controller = require('../controllers/posts_controller')
const users_controller = require('../controllers/users_controller')

const { isAuth } = require('../middlewares/authMiddleware')

router.get('/', (req, res) => {
    return res.status(200).send('Welcome to the Chess site API')
})

// Posts controller routes
router.get('/posts/', posts_controller.list)

router.get('/posts/:user_nick/:post_title', posts_controller.find)

/**********************************************************************************
 * 
 * Users controller routes
 *
***********************************************************************************/

// User authentication
router.post('/register', users_controller.signup)
router.post('/login', users_controller.signin)
router.post('/logout', isAuth, users_controller.logout)

// Users controller

router.get('/user/:user_nick', users_controller.find)

module.exports = router