const sequelize = require('sequelize')
const post = require('../models').Post
const user = require('../models').User

module.exports = {
    async list(req, res, next) {
        try {
            const obtained_post = await post.findAll({})
            return res.status(200).send(obtained_post)
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

            response = finded_post.toJSON()
            response.comentaries = await finded_post.getComentaries()
            new_user = await finded_post.getUser()
            new_user = new_user.toJSON()
            response.user = new_user

            return res.status(200).send(response)

        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }
    }
}