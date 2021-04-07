const express = require('express')
const router = express.Router()

const post_controller = require('../controllers/posts_controller')

router.get('/', (req, res) => {
    return res.status(200).send('Welcome to the Chess site API')
})

// Posts controller routes
router.get('/posts/', post_controller.list)

router.get('/posts/:user_nick/:post_title', post_controller.find)

module.exports = router