const jwt = require('jsonwebtoken')
const token = require('../models').Token
const user = require('../models').User

module.exports = {
    async isAuth(req, res, next) {
        const remember_token = req.header('x-token')

        try {
            const obtained_token = await token.findOne({
                where: {
                    remember_token
                }
            })

            const decode = jwt.verify(remember_token, 'only_dev')
            const user_of_token = await user.findOne({ where: { id: decode.id } })

            if (user_of_token && user_of_token.nick === decode.nick && obtained_token.expires > new Date()) {
                return next()
            }
            return res.status(401).send({ message: 'Invalid token' })
        }
        catch (err) {
            console.log(err)
            return res.status(401).send({ message: 'Invalid token' })
        }
    }
}