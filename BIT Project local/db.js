const mysql = require('mysql')

const con = mysql.createConnection({
    host: "database-1.c6exrjimw94y.us-east-2.rds.amazonaws.com",
    user: "projectx",
    password: "projectx",
    database: "Department",
})

con.connect((err, res) => {
    if (err) throw err;
    else console.log("connected")
})

module.exports = con;