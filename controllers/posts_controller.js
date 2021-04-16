const sequelize = require('sequelize')
const post = require('../models').Post
const user = require('../models').User
const commentary = require('../models').Commentary
const category = require('../models').Category
const tag = require('../models').Tag

module.exports = {
    async list(req, res, next) {
        try {
            const obtained_posts = await post.findAll({
                include: [
                    {
                        model: user
                    }, {
                        model: category
                    }, {
                        model: tag
                    }

                ]
            })

            return res.status(200).send(obtained_posts)
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
                include: {
                    model: commentary,
                    include: user
                },
                where: {
                    user_id: finded_user.id,
                    title: post_title
                }
            })

            return res.status(200).send(finded_post)

        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }
    }
}