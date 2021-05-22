const sequelize = require('sequelize')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user = require('../models').User
const post = require('../models').Post
const category = require('../models').Category
const tag = require('../models').Tag
const token = require('../models').Token

module.exports = {
    async signup(req, res) {
        const { name, nick, email, password } = req.body
        try {
            salt = await bcrypt.genSalt(10)
            hash = await bcrypt.hash(password, salt)

            const created_user = await user.create({ name, nick, email, password: hash })

            const new_user_token = await createToken(created_user)

            return res.header('x-token', new_user_token.remember_token).send({
                id: created_user.id,
                nick: created_user.nick,
                token: new_user_token.remember_token
            })
        }
        catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    },
    async signin(req, res) {
        const { nick, password } = req.body
        try {
            const finded_user = await user.findOne({
                where: {
                    nick
                }
            })

            if (finded_user && await bcrypt.compare(password, finded_user.password)) {

                user_token = await finded_user.getToken()

                if (user_token) {
                    const new_date = new Date()
                    new_date.setMinutes(new_date.getMinutes() + 120)
                    user_token.expires = new_date

                    await user_token.save()
                    return res.status(200).header('x-token', user_token.remember_token).send({
                        id: finded_user.id,
                        nick: finded_user.nick,
                        token: user_token.remember_token
                    })
                }
                user_token = await createToken(finded_user)

                return res.status(200).header('x-token', user_token.remember_token).send({
                    id: finded_user.id,
                    nick: finded_user.nick,
                    token: user_token.remember_token
                })
            }

            return res.status(401).send({ message: 'Wrong user or password' })

        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }
    },
    async logout(req, res) {
        try {
            const obtained_token = await token.findOne({ where: { remember_token: req.header('x-token') } })
            obtained_token.expires = null
            await obtained_token.save()
            return res.status(200).send({ message: 'logout succesfully' })
        }
        catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }
    },
    async find(req, res) {
        const { user_nick } = req.params
        try {
            const obtained_user = await user.findOne({
                where: { nick: user_nick },
                attributes: [
                    'id', 'name', 'nick', 'trainer'
                ],
                include: [
                    {
                        model: post,
                        attributes: [
                            'id', 'title', 'game', 'visit_counter'
                        ],
                        limit: 15,
                        include: [
                            {
                                model: category,
                                attributes: [
                                    'name'
                                ]
                            },
                            {
                                model: tag,
                                attributes: [
                                    'name'
                                ],
                                through: {
                                    attributes: []
                                }
                            },
                            {
                                model: user,
                                attributes: [
                                    'id', 'name', 'nick', 'trainer'
                                ]
                            }
                        ]
                    }
                ]
            })
            const n_user_posts = await post.count({ where: { user_id: obtained_user.id } })
            return res.send({
                user: obtained_user,
                post_count: n_user_posts
            })
        }
        catch (err) {
            console.log(err)
            return res.status(400).send({
                message: 'Unespected error',
                err
            })
        }
    }
}

const createToken = async user => {
    const token_data = {
        id: user.id,
        nick: user.nick,
    }

    const remember_token = await jwt.sign(token_data, 'only_dev')

    const expires_token = new Date()
    expires_token.setMinutes(expires_token.getMinutes() + 120)

    const new_user_token = await token.create({
        user_id: user.id,
        remember_token,
        expires: expires_token
    })

    return new_user_token
}