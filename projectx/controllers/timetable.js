const con = require('../db')
const jwt = require('jsonwebtoken')


exports.timetable = async (req, res) => {
    try{
        var sql = 'select * from class4a'
        const [result]  = await  con.query(sql)
        res.json(result)
    }
    catch(err){
        res.status(500).json({errors: [{message: "server error"}]})
    }
   
      

}

exports.dayTimeTable = async (req, res) => {
    // console.log(req.params);
    // console.log(req.params.day);
    try{
        var sql = `select* from class4a where day = '${req.params.day}'`
        const [result] = await con.query(sql)
        res.json(result)
    } catch(err){
        res.status(500).json({errors: [{message: "server error"}]})
    }
   

};