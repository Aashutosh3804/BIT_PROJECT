const con = require('../db')

exports.timetable = (req, res) => {
    var sql = 'select * from class4a'
    con.query(sql, (error, result) => {
        if (error) throw error;
        else console.log(result)
        res.json(result)
    })

}

exports.dayTimeTable = (req, res) => {
    console.log(req.params);
    console.log(req.params.day);
    var sql = `select* from class4a where day = '${req.params.day}'`
    con.query(sql, (error, result) => {
        console.log(result)

        res.json(result);
    })

};