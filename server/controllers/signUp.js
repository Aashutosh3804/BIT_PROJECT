const bcrypt = require('bcrypt')
const saltRounds = 10;

const con = require('../db')

exports.signup = (req, response) => {
    console.log(req)
    // response.redirect("/abc.html");
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let usn = req.body.usn
    let year = req.body.year
    let section = req.body.section
    let batch = req.body.batch

    var sql = `select* from studentInfo where email = '${email}'`

   
        
        console.log("Connected!");

        con.query(sql, (err, res) => {
            if (res.length < 1) {
                response.send("You are successfully registered")
                console.log(res.length)

                let hashPassword;

                let signup_obj = {
                    name: name,
                    email: email,
                    password: password,
                    usn: usn,
                    year: year,
                    section: section,
                    batch: batch
                }

                console.log(signup_obj)

                bcrypt.hash(password, saltRounds, (err, hash) => {
                    if (err) throw err
                    hashPassword = hash;
                    console.log(hashPassword);



                    var sql = `insert into studentInfo values ('${name}', '${usn}', '${email}','${hashPassword}','${year}','${section}','${batch}') `;
                    con.query(sql, (err, result) => {
                        if (err) throw err;
                        console.log("record inserted")
                    });

                })




            } else {
                response.send("User with this email already exists. Try with a different email.")
            }
        })



    

}