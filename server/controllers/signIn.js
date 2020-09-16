const bcrypt = require('bcrypt')
const saltRounds = 10;

const con = require('../db')

exports.signin = (req, res) => {
    let usn = req.body.usn;
    let password = req.body.password;
    let dbpassword;



    console.log("connected");

    var sql = `select password from studentInfo where usn='${usn}'`
    con.query(sql, (err, result) => {
        if (err) throw err;
        dbpassword = result[0].password;
        // console.log(result[0].password)
        // console.log(password)
        bcrypt.compare(password, dbpassword, (error, result) => {
            if (error) throw error;
            if (result) {
                res.redirect("/homepage.html")
            } else {
                res.send("login failed")
            }
        })
    })

}

// console.log(usn, password)