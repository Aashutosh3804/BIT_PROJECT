const con = require('../db')
const jwt = require('jsonwebtoken')


exports.teacherInfo = async (req, res) => {
        // console.log(req)

    try {
        let authData =  await jwt.verify(req.token, 'secretkey')
        var sql = `select * from teacher`
        const [result] = await con.query(sql);
        console.log(result)
        res.json(result)
    }  catch(err){
        res.status(500).json({errors: [{message: "server error"}]})
    }
   
}