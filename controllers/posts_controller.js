const sequelize = require('sequelize')
const post = require('../models').Post
const user = require('../models').User
const comentary = require('../models').Comentary

module.exports = {
    async list(req, res, next) {
        try {
            const obtained_posts = await post.findAll({})
            let response = []

            for (let i = 0; i < obtained_posts.length; i++) {
                response[i] = obtained_posts[i].toJSON()
                const obtained_user = await obtained_posts[i].getUser()
                response[i].user = obtained_user
            }

            return res.status(200).send(response)
        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }
    },
    async find(req, res) {
        try {
            const { user_nick, post_title } = req.params

            const finded_user = await user.findOne({
                where: {
                    nick: user_nick
                }
            })

            const finded_post = await post.findOne({
                where: {
                    user_id: finded_user.id,
                    title: post_title
                }
            })

            // Finding commentaries data

            response = finded_post.toJSON()
            finded_comentaries = await finded_post.getComentaries()

            response.comentaries = []

            for (let i = 0; i < finded_comentaries.length; i++) {
                response.comentaries[i] = finded_comentaries[i].toJSON()
                const finded_user = await finded_comentaries[i].getUser()
                response.comentaries[i].user = finded_user
            }

            // Finding user data

            new_user = await finded_post.getUser()
            response.user = new_user.toJSON()

            return res.status(200).send(response)

        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }
    }
}