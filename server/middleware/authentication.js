const { verifyToken } = require("../utils/jwt")
const { User } = require("../models")

const authentication = async (req, res, next) => {
    try {
        let { authorization } = req.headers
        if (!authorization) throw { name: "Unauthorized" }

        const access_token = authorization.split(' ')[1]
        const payload = verifyToken(access_token)

        const user = await User.findByPk(payload.id)
        if (!user) throw { name: "Unauthorized" }

        req.loginInfo = {
            id: user.id,
            email: user.email,
        }
        next()
    } catch (error) {
        console.log(error);

        next(error)
    }
}

module.exports = { authentication }