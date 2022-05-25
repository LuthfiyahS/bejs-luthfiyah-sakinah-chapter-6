const jwt = require('jsonwebtoken')
const privateKey = 'ch-bejs'

exports.verifyJwt = (req, res, next) => {
    const authHeader = req?.headers['authorization']
    if (!authHeader) {
        return res.status(401).json({
            'message': 'Unauthorized'
        })
    }
    const token = authHeader

    if (token == null) return res.status(401).json({
        'message': 'Unauthorizedddd'
    })

    jwt.verify(token, privateKey, (err, user) => {
        
        req.user = user
        next()
    })
}