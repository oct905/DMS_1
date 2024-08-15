const rateLimit = require("express-rate-limit")

module.exports = {
    limiter: rateLimit({
        windowMs: 60 * 1000,
        max: 100,
        handler: (req, res, next) => {
            next({
                status: 503
            })
            res.status(503).json({
                msg: 'Service Unavailable - Too many requests, please try again later'
            });
        }
    })
}