const jwt = require('jsonwebtoken')


exports.verifyToken = async (req, res, next)=> {
    try{
        const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1];
        console.log(bearerToken)
       
        let authData =  await jwt.verify(bearerToken, 'secretkey')
        req.user = authData.usn
    
        next()
    } else {
        console.log("aashutosh")
        res.status(403).json({errors:[{message:'authorisation failed'}]})
    }
    }catch(err){
        res.status(403).json({errors:[{message:'authorisation failed'}]})

    }
    
}
