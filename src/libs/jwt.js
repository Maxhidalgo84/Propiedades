const jwt = require('jsonwebtoken')





const createToken = (payload) => {

    return new Promise((resolve, reject) => {
    jwt.sign(
        payload,
        process.env.TOKENSECRET,
        {
            expiresIn: "1d"
        }, (err, token) => {
            if (err) reject(err)
            resolve(token)     
        })
    })
    
}


module.exports = {createToken}