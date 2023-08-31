const jwt = require('jsonwebtoken');

const authRequired = (req, res,next) => {

    //console.log(req.headers);

    const {token} = req.cookies
    

    if(!token)
        return res.status(401).json({message: 'No token provided'})
    

    jwt.verify(token, process.env.TOKENSECRET, (err, user) => {
        if(err){
            return res.status(403).json({message: 'Invalid token'})
    
        }
        req.user = user

        
        next()
    })


}

module.exports = {authRequired} 